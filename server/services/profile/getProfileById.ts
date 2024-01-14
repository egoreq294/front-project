import { ObjectId } from "mongodb";
import { ApiError } from "../../exceptions";
import { ProfileModel } from "../../models/Profile";

export const getProfileById = async (id: string | ObjectId) => {
  const profile = await ProfileModel.findById(id);

  if (!profile) {
    throw ApiError.BadRequest("Пользователь не найден");
  }

  return profile;
};
