import bcrypt from "bcrypt";
import { ApiError } from "../../exceptions";
import { generateTokens, saveToken } from "../token";
import { UserModel } from "../../models/User";
import { getProfileById } from "../profile";

type LoginArgs = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginArgs) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw ApiError.BadRequest("Неверный логин или пароль");
  }

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);

  if (!isValidPassword) {
    throw ApiError.BadRequest("Неверный логин или пароль");
  }

  const profile = await getProfileById(user.profile);

  const tokens = generateTokens({ _id: user._id });

  if (!tokens?.refreshToken) {
    throw new ApiError(500, "Непредвиденная ошибка");
  }

  await saveToken({ userId: user._id, refreshToken: tokens.refreshToken });

  return { ...tokens, user, profile };
};
