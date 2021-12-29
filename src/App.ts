import DotEnvConfig from './commnons/config/DotEnvConfig';
import Database from './commnons/database/Database';

export default class App {
  private dotEnvConfig: DotEnvConfig;

  constructor() {
    this.dotEnvConfig = new DotEnvConfig();
    Database.connectToDatabase();
  }
}
