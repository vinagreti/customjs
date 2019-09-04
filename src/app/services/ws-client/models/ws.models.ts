export enum CustomWebsocketMessageTypes {
  VERSION = 'VERSION',
}

export class CustomWebsocketMessage {
  type: CustomWebsocketMessageTypes;
  value: any;
}
