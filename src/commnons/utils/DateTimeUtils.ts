import moment from 'moment';

export default class DateTimeUtils {
  public static getNowInFormat(format: string): string {
    return moment().format(format);
  }
}
