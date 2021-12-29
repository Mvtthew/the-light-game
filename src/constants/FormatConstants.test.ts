import FormatConstants from './FormatConstants';

describe('FormatConstants', () => {
  it('keys should be in upper case only', () => {
    let fine = true;
    Object.keys(FormatConstants).forEach((key) => {
      if (key.toUpperCase() !== key) fine = false;
    });
    expect(fine).toEqual(true);
  });
});
