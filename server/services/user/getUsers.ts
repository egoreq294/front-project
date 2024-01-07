import { UserModel } from "../../models/User";

export const getUsers = async () => {
  const users = await UserModel.find();
  return users;
};
