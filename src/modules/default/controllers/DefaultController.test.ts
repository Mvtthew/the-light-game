import { Router } from 'express';
import DefaultController from './DefaultController';

describe('DefaultController', () => {
  it('should return its router', () => {
    const defaultController = new DefaultController();

    expect(typeof defaultController.getRouter()).toEqual(typeof Router());
  });
});
