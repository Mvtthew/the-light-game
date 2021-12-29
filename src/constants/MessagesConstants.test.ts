import MessagesConstants from './MessagesConstants';

describe('MessagesConstants', () => {
  it('keys should be in upper case only', () => {
    let fine = true;
    Object.keys(MessagesConstants).forEach((key) => {
      if (key.toUpperCase() !== key) fine = false;
    });
    expect(fine).toEqual(true);
  });
});
