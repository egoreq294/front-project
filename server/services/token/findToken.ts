import { TokenModel } from "../../models/Token";

export const findToken = async (refreshToken: string) => {
  const tokenData = await TokenModel.findOne({ refreshToken });
  return tokenData;
};
