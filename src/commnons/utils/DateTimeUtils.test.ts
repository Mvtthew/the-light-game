import moment from 'moment';
import DateTimeUtils from './DateTimeUtils';

describe('DateTimeUtils', () => {
  it('should return now date in given format', () => {
    const format = 'YYYY-MM-DD HH:mm:ss';

    expect(DateTimeUtils.getNowInFormat(format)).toEqual(moment().format(format));
  });
});
