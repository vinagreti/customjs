import { ReplaySubject } from 'rxjs';

export interface WsOpenConnection<T> {
  channel: WebSocket;
  message: ReplaySubject<T>;
  error: ReplaySubject<Event>;
  connect: ReplaySubject<string>;
}
