import { ReplaySubject } from 'rxjs';

export interface CustomWsClientOpenConnection<T> {
  channel: WebSocket;
  message: ReplaySubject<T>;
  error: ReplaySubject<Event>;
  connect: ReplaySubject<string>;
}
