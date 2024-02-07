import { ApiError } from "../../exceptions";
import {
  validateRefreshToken,
  findToken,
  saveToken,
  generateTokens,
} from "../token";
import { UserModel } from "../../models/User";

export const refresh = async (refreshToken: string) => {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError();
  }

  const userData = validateRefreshToken(refreshToken);
  const tokenFromDb = await findToken(refreshToken);

  if (!userData || !tokenFromDb) {
    throw ApiError.UnauthorizedError();
  }

  const user = await UserModel.findById(userData._id);

  if (!user) {
    throw ApiError.UnauthorizedError();
  }

  const tokens = generateTokens({ _id: user._id });

  if (!tokens?.refreshToken) {
    throw new ApiError(500, "Непредвиденная ошибка");
  }

  await saveToken({ userId: user._id, refreshToken: tokens.refreshToken });

  return { ...tokens };
};
