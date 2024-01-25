import { ObjectId } from "mongodb";
import { ApiError } from "../../exceptions";
import { UserModel } from "../../models/User";

export const getUserById = async (id: string | ObjectId) => {
  const user = await UserModel.findById(id);

  if (!user) {
    throw ApiError.BadRequest("Пользователь не найден");
  }

  return user;
};
