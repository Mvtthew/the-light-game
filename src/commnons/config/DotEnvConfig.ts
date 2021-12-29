import dotenv from 'dotenv';
import { IDotEnvConfig } from './interfaces/IDotEnvConfig';

export default class DotEnvConfig {
  public constructor() {
    dotenv.config();
  }

  public static getByKey(key: keyof IDotEnvConfig): string {
    return process.env[key] || '';
  }
}
