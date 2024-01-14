import { validationResult } from "express-validator";
import { ApiError } from "../../exceptions";
import { register as registerService } from "../../services/user";
import { Request, Response, NextFunction } from "express";
import { createProfile as createProfileService } from "../../services";
import { getUserDTO } from "../../utils";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(
        ApiError.BadRequest("Введены не все обязательные поля", errors.array())
      );
    }

    const { email, password, username, avatar, roles, features, jsonSettings } =
      req.body;

    const { accessToken, refreshToken, user } = await registerService({
      email,
      password,
      username,
      avatar,
      roles,
      features,
      jsonSettings,
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const userDTO = getUserDTO(user);

    return res.json({ accessToken, refreshToken, user: userDTO });
  } catch (e) {
    next(e);
  }
};
