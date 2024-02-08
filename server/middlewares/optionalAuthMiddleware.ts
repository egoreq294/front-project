import { Request, Response, NextFunction } from "express";
import { ApiError } from "../exceptions";
import { validateAccessToken } from "../services";
import jwt, { JwtPayload } from "jsonwebtoken";

export const optionalAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorizationHeader = req.headers.authorization;

    const accessToken = authorizationHeader?.split(" ")[1];

    const decodedData = accessToken
      ? (jwt.decode(accessToken) as JwtPayload)
      : null;

    const userData =
      accessToken && decodedData?.exp && Date.now() < decodedData.exp * 1000
        ? validateAccessToken(accessToken)
        : null;

    req.body.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};
