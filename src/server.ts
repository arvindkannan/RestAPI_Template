import https from 'https';
import http from 'http';
import express from "express";
import cookieParser from "cookie-parser";
import * as fs from 'fs'
import {
  IServerConfigurations,
  getConfiguration,
  getEnvironment,
  applyMiddleware,
  portChecker,
  applyRoutes,
} from './utils';
import middleware from "./middleware";
import { ErrorHandler } from "./middleware";
import routes from "./api/routes"; //importing route and set to app

(async () => {

  process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
  });

  process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
  });

  // Create a new express application instance
  let app: express.Application = express();
  // require('./api/routes')(app, {});

  let port: number = await portChecker(parseInt(process.env.PORT || "14000"));

  app.use(cookieParser());
  //app.use(middlewares);
  //app.use(routes);
  applyMiddleware(middleware, app);//Apply middleware to an Express Instance.
  applyRoutes(routes, app);//Apply all routes to single Express Router instance
  applyMiddleware(ErrorHandler, app);

  const configurations: IServerConfigurations = {
    // Note: You may need sudo to run on port 443
    'production': { ssl: true, port: 443, hostname: 'example.com' },
    'development': { ssl: false, port: port, hostname: 'localhost' }
  };

  const environment: string = getEnvironment();
  const config: { ssl: boolean, port: number, hostname: string } = getConfiguration(configurations);

  // Create the HTTPS or HTTP server, as per configuration
  var server;
  if (config.ssl) {
    // Assumes certificates are in ./utils/ssl folder from package root source. Make sure the files
    // are secured.
    server = https.createServer(
      {
        key: fs.readFileSync(`./utils/ssl/${environment}/server.key`),
        cert: fs.readFileSync(`./utils/ssl/${environment}/server.crt`)
      },
      app
    )
  } else {
    server = http.createServer(app)
  }

  if (environment === 'development') {
    console.log("------------Routes-----------");
    console.log(routes);
    console.log("-----------------------------");
  }

  app.listen({ port: config.port }, () =>
    console.log('🚀 Server is ready and running at',
      `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}`
    )
  );
})();