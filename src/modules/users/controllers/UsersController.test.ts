import { Router } from 'express';
import UsersController from './UsersController';

describe('DefaultController', () => {
  it('should return its router', () => {
    const usersController = new UsersController();

    expect(typeof usersController.getRouter()).toEqual(typeof Router());
  });
});
