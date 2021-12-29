import { Document, model, Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema = new Schema<IUser>({
  login: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: '',
  },
});

const UserModel = model<IUser>('User', userSchema);

export type UserDocument = IUser & Document;

export default UserModel;
