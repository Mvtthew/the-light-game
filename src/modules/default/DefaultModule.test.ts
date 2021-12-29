import ExpressServer from '../../server/ExpressServer';
import DefaultModule from './DefaultModule';

describe('DefaultModule', () => {
  it('should bootstrap router', () => {
    const server = new ExpressServer();
    (server as any).server.use = jest.fn();

    DefaultModule.bootstrap(server);

    expect((server as any).server.use).toBeCalled();
  });
});
