import { Router } from 'express';
import ExpressServer from './ExpressServer';

describe('ExpressServer', () => {
  it('should load express middleware', () => {
    const expressServer = new ExpressServer();

    (expressServer as any).server.use = jest.fn();

    expressServer.loadMiddleware(() => {});

    expect((expressServer as any).server.use).toBeCalled();
  });

  it('should load express router', () => {
    const expressServer = new ExpressServer();

    (expressServer as any).server.use = jest.fn();

    expressServer.loadRouter('/', Router());

    expect((expressServer as any).server.use).toBeCalled();
  });

  it('should listen express server on specyfic port', () => {
    const expressServer = new ExpressServer();
    const testPort = 5959;

    (expressServer as any).server.listen = jest.fn();

    expressServer.listen(testPort);

    expect((expressServer as any).server.listen).toBeCalled();
    expect((expressServer as any).server.listen).toBeCalledWith(testPort);
  });
});
