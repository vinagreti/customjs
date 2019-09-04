/**
 * *** NOTE ON IMPORTING FROM ANGULAR AND NGUNIVERSAL IN THIS FILE ***
 *
 * If your application uses third-party dependencies, you'll need to
 * either use Webpack or the Angular CLI's `bundleDependencies` feature
 * in order to adequately package them for use on the server without a
 * node_modules directory.
 *
 * However, due to the nature of the CLI's `bundleDependencies`, importing
 * Angular in this file will create a different instance of Angular than
 * the version in the compiled application code. This leads to unavoidable
 * conflicts. Therefore, please do not explicitly import from @angular or
 * @nguniversal in this file. You can export any needed resources
 * from your application's main.server.ts file, as seen below with the
 * import for `ngExpressEngine`.
 */

import * as express from 'express';
import 'zone.js/dist/zone-node';
import { RegisterAsyncServer } from './async-server';
import { RegisterUniversalServer } from './static-server';
const compression = require('compression');

// Express server
const app = express();


const PORT = process.env.PORT || 4000;

/* COMPRESSION
 * compress the files before sending to browser
 */
app.use(compression());

/* Async Server
 * Uses websocket to stablish connection with clients
 */
RegisterAsyncServer(app);


/* Universal Server
 * Uses express to stablish a REST API
 * Uses 'view engine', 'html' to prerender the app before senting it to the client
 */
RegisterUniversalServer(app);


// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
