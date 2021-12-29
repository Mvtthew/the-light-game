import {
  request, response,
} from 'express';
import MessagesConstants from '../../../constants/MessagesConstants';
import DefaultService from './DefaultService';

describe('DefaultService', () => {
  it('should return hello message', () => {
    const req = request;
    const res = response;
    res.json = jest.fn();
    DefaultService.getHelloMessage(req, res);

    expect(res.json).toBeCalled();
    expect(res.json).toBeCalledWith({ message: MessagesConstants.WELCOME_TO_API });
  });
});
