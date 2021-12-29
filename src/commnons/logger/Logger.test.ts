import Logger from './Logger';

describe('Logger', () => {
  it('should log messages to console', () => {
    console.log = jest.fn();

    Logger.log('test', 'test');

    expect(console.log).toBeCalled();
    expect(console.log).toBeCalledWith('test', 'test');
  });

  it('should log errors to console', () => {
    console.error = jest.fn();

    Logger.error('test', 'test');

    expect(console.error).toBeCalled();
    expect(console.error).toBeCalledWith('test', 'test');
  });
});
