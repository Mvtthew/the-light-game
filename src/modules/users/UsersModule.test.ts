import ExpressServer from '../../server/ExpressServer';
import UsersModule from './UsersModule';

describe('UsersModule', () => {
  it('should bootstrap router', () => {
    const server = new ExpressServer();
    (server as any).server.use = jest.fn();

    UsersModule.bootstrap(server);

    expect((server as any).server.use).toBeCalled();
  });
});
