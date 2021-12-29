import express, { Router } from 'express';
import RoutesContants from '../../../constants/RoutesContants';
import DefaultService from '../services/DefaultService';

export default class DefaultController {
  private router: Router;

  public constructor() {
    this.router = express.Router();
    this.bootstrapRoutes();
  }

  /* istanbul ignore next */
  private bootstrapRoutes() {
    this.router.use(RoutesContants.SLASH, DefaultService.getHelloMessage);
  }

  public getRouter(): Router {
    return this.router;
  }
}
