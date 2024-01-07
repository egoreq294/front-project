import { TokenModel } from "../../models/Token";

export const removeToken = async (refreshToken: string) => {
  const tokenData = await TokenModel.deleteOne({ refreshToken });
  return tokenData;
};
