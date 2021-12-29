import Logger from '../../commnons/logger/Logger';
import MessagesConstants from '../../constants/MessagesConstants';
import RoutesContants from '../../constants/RoutesContants';
import ExpressServer from '../../server/ExpressServer';
import DefaultController from './controllers/DefaultController';

export default class DefaultModule {
  public static bootstrap(server: ExpressServer): void {
    server.loadRouter(
      RoutesContants.SLASH,
      new DefaultController().getRouter(),
    );
    Logger.log(MessagesConstants.BOOTSTRAPED_DEFAULT_MODULE);
  }
}
