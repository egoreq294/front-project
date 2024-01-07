import { ObjectId } from "mongodb";
import { TokenModel } from "../../models/Token";

type SaveTokenArgs = {
  userId: ObjectId;
  refreshToken: string;
};

export const saveToken = async ({ userId, refreshToken }: SaveTokenArgs) => {
  const tokenData = await TokenModel.findOne({ user: userId });

  if (tokenData) {
    tokenData.refreshToken = refreshToken;
    return tokenData.save();
  }

  const token = await TokenModel.create({ user: userId, refreshToken });

  return token;
};
