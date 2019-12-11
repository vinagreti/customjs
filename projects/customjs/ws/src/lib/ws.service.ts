import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { WsOpenConnection } from './ws.models';

const connectionInterval = 5e3;

const wsServiceConnections: {
  [key: string]: WsOpenConnection<any>;
} = {};

@Injectable()
export class WsService {
  constructor() {}

  connect<T>(url): WsOpenConnection<T> {
    const connection = wsServiceConnections[url];
    if (connection) {
      return connection;
    } else {
      return this.connectToWs(url);
    }
  }

  private connectToWs(url): WsOpenConnection<any> {
    const connection = this.openConnection(url);
    wsServiceConnections[url] = connection;
    return connection;
  }

  private openConnection(url: string, connection?: WsOpenConnection<any>) {
    if (connection) {
      connection.channel = this.createWebSocket(url);
    } else {
      connection = this.createNewConnection(url);
    }
    this.configureConnectionEvents(url, connection);
    return connection;
  }

  private watchConnectionRequests(connection: WsOpenConnection<any>) {
    connection.connect.pipe(debounceTime(connectionInterval)).subscribe(url => {
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

  private configureConnectionEvents(url, connection: WsOpenConnection<any>) {
    connection.channel.onclose = () => this.handleOnClose(url, connection);
    connection.channel.onerror = error => this.handleError(error, connection);
    connection.channel.onmessage = message => this.handleMessage(message, connection);
  }

  private handleMessage(message, connection: WsOpenConnection<any>) {
    const messageData = this.parseMessage(message);
    connection.message.next(messageData);
  }

  private parseMessage(message) {
    try {
      return JSON.parse(message.data || '""');
    } catch {
      return message.data;
    }
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
