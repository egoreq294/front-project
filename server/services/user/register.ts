import bcrypt from "bcrypt";
import { UserModel } from "../../models/User";
import { ApiError } from "../../exceptions";
import { generateTokens, saveToken } from "../token";
import { getUserDTO } from "../../utils";

type RegisterArgs = {
  email: string;
  password: string;
};

export const register = async ({ email, password }: RegisterArgs) => {
  const alreadyRegistered = await UserModel.findOne({ email });

  if (alreadyRegistered) {
    throw ApiError.BadRequest("Пользователь с таким email уже существует");
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = await UserModel.create({ email, passwordHash });

  const userDTO = getUserDTO(user);

  const tokens = generateTokens({ _id: user._id });

  if (!tokens?.refreshToken) {
    throw new ApiError(500, "Непредвиденная ошибка");
  }

  await saveToken({ userId: user._id, refreshToken: tokens.refreshToken });

  return { ...tokens, user: userDTO };
};
