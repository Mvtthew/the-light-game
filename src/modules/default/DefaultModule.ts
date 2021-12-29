import { Router } from 'express';
import DefaultController from './controllers/DefaultController';

export default class DefaultModule {
  public static router(): Router {
    return new DefaultController().getRouter();
  }
}
