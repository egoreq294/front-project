import { ObjectId } from "mongodb";
import { Profile } from "../../types/profile";
import { ProfileModel } from "../../models/Profile";

export type ProfileDTO = {
  id: ObjectId;
} & Profile;

export const getProfileDTO = (
  profileModel: InstanceType<typeof ProfileModel> | null
): ProfileDTO | null => {
  if (!profileModel) {
    return null;
  }

  return {
    id: profileModel._id,
    firstName: profileModel.firstName,
    lastName: profileModel.lastName,
    avatar: profileModel.avatar,
    age: profileModel.age,
    country: profileModel.country,
    city: profileModel.city,
    currency: profileModel.currency,
  };
};
