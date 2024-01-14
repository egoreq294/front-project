import { ProfileModel } from "../../models/Profile";

export const createProfile = async () => {
  const profile = await ProfileModel.create({});
  return profile;
};
