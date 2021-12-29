import Logger from '../../commnons/logger/Logger';
import MessagesConstants from '../../constants/MessagesConstants';
import RoutesContants from '../../constants/RoutesContants';
import ExpressServer from '../../server/ExpressServer';
import UsersController from './controllers/UsersController';

export default class UsersModule {
  public static bootstrap(server: ExpressServer): void {
    server.loadRouter(
      RoutesContants.SLASH + RoutesContants.USER,
      new UsersController().getRouter(),
    );
    Logger.log(MessagesConstants.BOOTSTRAPED_USERS_MODULE);
  }
}
