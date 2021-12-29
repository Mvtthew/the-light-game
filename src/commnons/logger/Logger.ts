export default class Logger {
  static log(...messages: string[]): void {
    // eslint-disable-next-line no-console
    console.log(...messages);
  }

  static error(...errors: string[]): void {
    // eslint-disable-next-line no-console
    console.error(...errors);
  }
}
