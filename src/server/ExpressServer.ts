import express, {
  Express, RequestHandler, Router,
} from 'express';
import Logger from '../commnons/logger/Logger';
import MessagesConstants from '../constants/MessagesConstants';

export default class ExpressServer {
  public server: Express;

  public constructor() {
    this.server = express();
  }

  public loadMiddleware(middleware: RequestHandler): void {
    this.server.use(middleware);
  }

  public loadRouter(router: Router): void {
    this.loadMiddleware(router);
  }

  public listen(port: number): void {
    this.server.listen(port);
    Logger.log(MessagesConstants.STARTED_SERVER);
    Logger.log(MessagesConstants.LISTENING_ON_PORT + port.toString());
  }
}
