import RoutesContants from './RoutesContants';

describe('RoutesConstants', () => {
  it('keys should be in upper case only', () => {
    let fine = true;
    Object.keys(RoutesContants).forEach((key) => {
      if (key.toUpperCase() !== key) fine = false;
    });
    expect(fine).toEqual(true);
  });
});
