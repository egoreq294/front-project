import jwt from "jsonwebtoken";
import { ApiError } from "../../exceptions";

export const validateRefreshToken = (token: string) => {
  const secret = process.env.JWT_REFRESH_SECRET;

  if (!secret) {
    throw new ApiError(500, "Непредвиденная ошибка");
  }

  const userData = jwt.verify(token, secret);
  return <any>userData;
};
