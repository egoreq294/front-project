import { ObjectId } from "mongodb";
import { UserModel } from "../../models/User";

export type UserDTO = {
  email: string;
  id: ObjectId;
};

export const getUserDTO = (
  userModel: InstanceType<typeof UserModel>
): UserDTO => {
  return { email: userModel.email, id: userModel._id };
};
