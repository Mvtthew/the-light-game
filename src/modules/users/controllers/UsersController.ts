import { Router } from 'express';

export default class UsersController {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  public getRouter(): Router {
    return this.router;
  }
}
