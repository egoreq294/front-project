import { ApiError } from "../../exceptions";
import { UserModel } from "../../models/User";

export const getUserById = async (id: string) => {
  const user = await UserModel.findById(id);

  if (!user) {
    throw ApiError.BadRequest("Пользователь не найден");
  }

  return user;
};
