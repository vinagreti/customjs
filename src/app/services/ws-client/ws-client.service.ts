import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CustomWsClientOpenConnection } from './ws-client.models';

const connectionInterval = 5e3;

@Injectable()
export class CustomWsClientService {

  private connections: {
    [key: string]: CustomWsClientOpenConnection<any>
  } = {};

  constructor() { }

  connect<T>(url): CustomWsClientOpenConnection<T> {
    const connection = this.connections[url];
    if (connection) {
      return connection;
    } else {
      return this.connectToWs(url);
    }
  }

  private connectToWs(url): CustomWsClientOpenConnection<any> {
    const connection = this.openConnection(url);
    this.connections[url] = connection;
    return connection;
  }


  private openConnection(url: string, connection?: CustomWsClientOpenConnection<any>) {
    if (connection) {
      connection.channel = this.createWebSocket(url);
    } else {
      connection = this.createNewConnection(url);
    }
    this.configureConnectionEvents(url, connection);
    return connection;
  }

  private watchConnectionRequests(connection: CustomWsClientOpenConnection<any>) {
    connection.connect
      .pipe(
        debounceTime(connectionInterval),
      )
      .subscribe(url => {
        this.openConnection(url, connection);
      });
  }

  private createNewConnection(url) {
    const connection = {
      channel: this.createWebSocket(url),
      message: this.createNewStreamSubject(),
      error: this.createNewStreamSubject(),
      connect: this.createNewStreamSubject(),
    };
    this.watchConnectionRequests(connection);
    return connection;
  }

  private createNewStreamSubject() {
    return new ReplaySubject<any>();
  }

  private configureConnectionEvents(url, connection: CustomWsClientOpenConnection<any>) {
    connection.channel.onclose = () => this.handleOnClose(url, connection);
    connection.channel.onerror = (error) => this.handleError(error, connection);
    connection.channel.onmessage = (message) => this.handleMessage(message, connection);
  }

  private handleMessage(message, connection: CustomWsClientOpenConnection<any>) {
    const messageData = JSON.parse(message.data || '""');
    connection.message.next(messageData);
  }

  private handleOnClose(url, connection) {
    connection.connect.next(url);
  }

  private handleError(error, connection) {
    connection.error.next(error);
  }

  private createWebSocket(url) {
    return new WebSocket(url);
  }

}
