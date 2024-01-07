import { ObjectId } from "mongodb";
import { ApiError } from "../../exceptions";
import { UserModel } from "../../models/User";

export const getUserById = async (id: string) => {
  const isValidID = ObjectId.isValid(id);
  if (!isValidID) {
    throw ApiError.BadRequest("Пользователь не найден");
  }

  const user = await UserModel.findById(id);

  if (!user) {
    throw ApiError.BadRequest("Пользователь не найден");
  }

  return user;
};
