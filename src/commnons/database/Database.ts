import mongoose from 'mongoose';
import MessagesConstants from '../../constants/MessagesConstants';
import DotEnvConfig from '../config/DotEnvConfig';
import Logger from '../logger/Logger';

export default class Database {
  public static connectToDatabaseSuccess(): void {
    Logger.log(MessagesConstants.CONNECTED_TO_DB);
  }

  public static connectToDatabase(): void {
    mongoose.connect(DotEnvConfig.getByKey('MONGO_URI'), Database.connectToDatabaseSuccess);
  }
}
