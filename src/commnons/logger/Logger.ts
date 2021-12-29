import FormatConstants from '../../constants/FormatConstants';
import DateTimeUtils from '../utils/DateTimeUtils';

export default class Logger {
  static log(...messages: string[]): void {
    // eslint-disable-next-line no-console
    console.log(
      `${DateTimeUtils.getNowInFormat(FormatConstants.FULLYEAR_MONTH_DAY_HOUR_MINUTE_SECOUND)} -`,
      ...messages,
    );
  }

  static error(...errors: string[]): void {
    // eslint-disable-next-line no-console
    console.error(
      `${DateTimeUtils.getNowInFormat(FormatConstants.FULLYEAR_MONTH_DAY_HOUR_MINUTE_SECOUND)} -`,
      ...errors,
    );
  }
}
