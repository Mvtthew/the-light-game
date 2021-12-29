import { Router } from 'express';
import DefaultModule from './DefaultModule';

describe('DefaultModule', () => {
  it('should return default contoller router', () => {
    expect(typeof DefaultModule.router()).toEqual(typeof Router());
  });
});
