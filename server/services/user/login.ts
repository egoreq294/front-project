import bcrypt from "bcrypt";
import { ApiError } from "../../exceptions";
import { generateTokens, saveToken } from "../token";
import { UserModel } from "../../models/User";
import { getUserDTO } from "../../utils";

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

  const userDTO = getUserDTO(user);

  const tokens = generateTokens({ _id: user._id });

  if (!tokens?.refreshToken) {
    throw new ApiError(500, "Непредвиденная ошибка");
  }

  await saveToken({ userId: user._id, refreshToken: tokens.refreshToken });

  return { ...tokens, user: userDTO };
};
