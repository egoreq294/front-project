import { ObjectId } from "mongodb";
import { UserModel } from "../../models/User";
import { UserRoleEnum } from "../../types/user";

export type UserDTO = {
  email: string;
  id: ObjectId;
  roles?: UserRoleEnum[];
  features?: Record<string, boolean>;
  jsonSettings?: Record<string, any>;
};

export const getUserDTO = (
  userModel: InstanceType<typeof UserModel>
): UserDTO => {
  return {
    email: userModel.email,
    id: userModel._id,
    roles: userModel.roles,
    features: userModel.features,
    jsonSettings: userModel.jsonSettings,
  };
};
