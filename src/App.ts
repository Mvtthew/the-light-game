import cors from 'cors';
import express from 'express';
import DotEnvConfig from './commnons/config/DotEnvConfig';
import Database from './commnons/database/Database';
import DefaultModule from './modules/default/DefaultModule';
import UsersModule from './modules/users/UsersModule';
import ExpressServer from './server/ExpressServer';

export default class App {
  private dotEnvConfig: DotEnvConfig;

  private server: ExpressServer;

  public constructor() {
    // Load .env
    this.dotEnvConfig = new DotEnvConfig();

    // DB
    Database.connectToDatabase();

    // Web server
    this.server = new ExpressServer();
    this.bootstrapServer();
  }

  private bootstrapServer() {
    this.server.loadMiddleware(cors());
    this.server.loadMiddleware(express.json());

    DefaultModule.bootstrap(this.server);
    UsersModule.bootstrap(this.server);

    this.server.listen(+DotEnvConfig.getByKey('SERVER_LISTEN_PORT'));
  }
}
