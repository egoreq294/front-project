import jwt from "jsonwebtoken";

import { TokenPayload } from "../../types/token";

export const generateTokens = (payload: TokenPayload) => {
  const refreshSecret = process.env.JWT_REFRESH_SECRET;
  const accessSecret = process.env.JWT_ACCESS_SECRET;

  if (!refreshSecret || !accessSecret) {
    return;
  }

  const accessToken = jwt.sign(payload, accessSecret, {
    expiresIn: "30m",
  });

  const refreshToken = jwt.sign(payload, refreshSecret, {
    expiresIn: "30d",
  });

  return {
    accessToken,
    refreshToken,
  };
};
