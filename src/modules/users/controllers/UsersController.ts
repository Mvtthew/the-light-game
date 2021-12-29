import { Router } from 'express';
import RoutesContants from '../../../constants/RoutesContants';
import UsersService from '../services/UsersService';

export default class UsersController {
  private router: Router;

  constructor() {
    this.router = Router();
    this.bootstrapRoutes();
  }

  private bootstrapRoutes(): void {
    this.router.post(RoutesContants.SLASH, async (req, res) => {
      const { login, email, password } = req.body;

      const createdUser = await UsersService.InsertNewUser({
        login,
        email,
        password,
      });

      res.json(createdUser);
    });
  }

  public getRouter(): Router {
    return this.router;
  }
}
