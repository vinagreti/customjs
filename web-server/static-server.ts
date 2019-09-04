import { REQUEST } from '@nguniversal/express-engine/tokens';
import * as express from 'express';
const mime = require('mime-types');
const path = require('path');

const DIST_FOLDER = path.join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap } = require('./../dist/server/main');

export function RegisterUniversalServer(app) {

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }));

  app.set('view engine', 'html');
  app.set('views', DIST_FOLDER);

  // Example Express Rest API endpoints
  // app.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  app.get('*.*', express.static(DIST_FOLDER, {
    maxAge: '1y',
    setHeaders: (res, requestPath: string) => {
      if (['text/html', 'application/json'].includes(mime.lookup(requestPath))) {
        res.setHeader('Cache-Control', 'public, max-age=0, no-cache, no-store');
      }
    }
  }));

  // All regular routes use the Universal engine
  app.get('*', (req: express.Request, res: express.Response) => {
    res.setHeader('Cache-Control', 'public, max-age=0, no-cache, no-store');
    res.render('index', {
      req,
      providers: [
        { provide: REQUEST, useValue: req },
      ]
    });
  });
}
