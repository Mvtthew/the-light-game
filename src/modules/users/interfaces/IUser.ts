import { Types } from 'mongoose';

export interface IUser {
  _id?: Types.ObjectId,
  login: string;
  email: string;
  password: string;
  avatar?: string;
}
