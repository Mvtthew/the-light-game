import mongoose from 'mongoose';
import MessagesConstants from '../../constants/MessagesConstants';
import Logger from '../logger/Logger';
import Database from './Database';

describe('Database', () => {
  it('should connect to mongodb with specific url', () => {
    mongoose.connect = jest.fn();

    Database.connectToDatabase();

    expect(mongoose.connect).toBeCalled();
  });

  it('should log message when connected to db', () => {
    Logger.log = jest.fn();

    Database.connectToDatabaseSuccess();

    expect(Logger.log).toBeCalled();
    expect(Logger.log).toBeCalledWith(MessagesConstants.CONNECTED_TO_DB);
  });
});
