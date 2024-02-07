import { ObjectId } from "mongodb";
import { ApiError } from "../../exceptions";
import { ProfileModel } from "../../models/Profile";
import { Profile } from "../../types/profile";

type UpdateProfileArgs = {
  id: ObjectId;
} & Profile;

export const updateProfile = async ({
  id,
  ...restFields
}: UpdateProfileArgs) => {
  const filter = { _id: id };
  const profile = await ProfileModel.findOneAndUpdate(filter, restFields, {
    new: true,
  });

  if (!profile) {
    throw ApiError.BadRequest("Произошла непредвиденная ошибка");
  }

  return profile;
};
