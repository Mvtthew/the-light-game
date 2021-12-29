import { Request, Response } from 'express';
import MessagesConstants from '../../../constants/MessagesConstants';

export default class DefaultService {
  public static getHelloMessage(req: Request, res: Response): void {
    res.json({
      message: MessagesConstants.WELCOME_TO_API,
    });
  }
}
