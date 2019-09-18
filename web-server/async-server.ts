import expressWs from 'express-ws';
import { getAppBuildVersion } from './helpers/version.helper';

export function RegisterAsyncServer(app) {
  /* INSTALL WEBSOKET
   * Enables websocket within the app
   */
  expressWs(app);

  /* VERSION ENDPOINT
   * Send the build version to the client
   */
  app.ws('/v', (ws, req) => {
    getAppBuildVersion().then(appVersion => {
      ws.send(
        JSON.stringify({
          type: 'VERSION',
          value: Date.now(),
        })
      );
    });
  });
}
