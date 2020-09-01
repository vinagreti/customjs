import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WsService } from './ws.service';

describe('WsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsService],
    });
  });

  it('should be created', () => {
    // given
    const service: any = TestBed.inject(WsService);
    // when
    spyOn(service, 'createWebSocket').and.returnValue({
      onclose: of(),
      onerror: of(),
      onmessage: of(),
    });
    service.connect('abc');
    // then
    expect(service).toBeTruthy();
  });

  it('should return open connection for the same url', () => {
    // given
    const service: any = TestBed.inject(WsService);
    const url = 'wss://abc';
    // when
    const spy = spyOn(service, 'connectToWs').and.callFake(() => {
      service.connections[url] = {};
    });
    service.connect(url);
    service.connect(url);
    // then
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not create new connection if already exists', () => {
    // given
    const service: any = TestBed.inject(WsService);
    const url = 'wss://abc';
    // when
    spyOn(service, 'createWebSocket').and.callFake(() => {});
    spyOn(service, 'configureConnectionEvents').and.callFake(() => {});
    const spy = spyOn(service, 'createNewConnection');
    service.openConnection(url, { channel: {} });
    // then
    expect(spy).not.toHaveBeenCalled();
  });

  it('should open new connection if previous was closed or has thrown an error', () => {
    // given
    const service: any = TestBed.inject(WsService);
    const url = 'wss://abc';
    // when
    const spy = spyOn(service, 'openConnection').and.callFake(() => {});
    service.watchConnectionRequests({
      connect: {
        next: () => {},
        pipe: (...data) => of(url),
      },
    });
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should configure connection events', () => {
    // given
    const service: any = TestBed.inject(WsService);
    const url = 'wss://abc';
    const channel: any = {};
    const message = { next: () => {} };
    const connection = { channel, message };
    // when
    service.configureConnectionEvents(url, connection);
    // then
    expect(connection.channel.onclose).toBeTruthy();
    expect(connection.channel.onerror).toBeTruthy();
    expect(connection.channel.onmessage).toBeTruthy();
  });

  it('should handle error', () => {
    // given
    const service: any = TestBed.inject(WsService);
    let called: boolean;
    const url = 'wss://abc';
    const channel: any = {};
    const error = {
      next: () => {
        called = true;
      },
    };
    const connection = { channel, error };
    // when
    service.configureConnectionEvents(url, connection);
    connection.channel.onerror('error');
    // then
    expect(called).toBeTruthy();
  });

  it('should handle on close', () => {
    // given
    const service: any = TestBed.inject(WsService);
    let called: boolean;
    const url = 'wss://abc';
    const channel: any = {};
    const connect = {
      next: () => {
        called = true;
      },
    };
    const connection = { channel, connect };
    // when
    service.configureConnectionEvents(url, connection);
    connection.channel.onclose();
    // then
    expect(called).toBeTruthy();
  });

  it('should handle message', () => {
    // given
    const service: any = TestBed.inject(WsService);
    let called: boolean;
    const url = 'wss://abc';
    const channel: any = {};
    const message = {
      next: () => {
        called = true;
      },
    };
    const connection = { channel, message };
    const fakeMessage = { data: JSON.stringify({}) };
    // when
    service.configureConnectionEvents(url, connection);
    connection.channel.onmessage(fakeMessage, connection);
    // then
    expect(called).toBeTruthy();
  });

  it('should handle empty message', () => {
    // given
    const service: any = TestBed.inject(WsService);
    let called: boolean;
    const url = 'wss://abc';
    const channel: any = {};
    const message = {
      next: () => {
        called = true;
      },
    };
    const connection = { channel, message };
    const fakeMessage = { data: undefined };
    // when
    service.configureConnectionEvents(url, connection);
    connection.channel.onmessage(fakeMessage, connection);
    // then
    expect(called).toBeTruthy();
  });

  it('should create new websocket', () => {
    // given
    const service: any = TestBed.inject(WsService);
    const url = 'wss://abc';
    // when
    const websocket = service.createWebSocket(url);
    // then
    expect(websocket).toBeTruthy();
  });

  it('should get raw data if not parseable', () => {
    // given
    const service: any = TestBed.inject(WsService);
    const message = {
      data: 'teste',
    };
    // when
    const parsed = service.parseMessage(message);
    // then
    expect(parsed).toBeTruthy(message.data);
  });
});
