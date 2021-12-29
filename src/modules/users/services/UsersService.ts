import { IUser } from '../interfaces/IUser';
import UserModel, { UserDocument } from '../models/UserModel';

export default class UsersService {
  public static async InsertNewUser(user: IUser): Promise<UserDocument> {
    return await UserModel.create(user);
  }
}
