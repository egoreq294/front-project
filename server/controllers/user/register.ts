import { validationResult } from "express-validator";
import { ApiError } from "../../exceptions";
import { register as registerService } from "../../services/user";
import { Request, Response, NextFunction } from "express";
import { createProfile as createProfileService } from "../../services";
import { getProfileDTO, getUserDTO } from "../../utils";

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

    const { accessToken, refreshToken, user, profile } = await registerService({
      email,
      password,
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const userDTO = getUserDTO(user);
    const profileDTO = getProfileDTO(profile);

    return res.json({
      accessToken,
      refreshToken,
      user: { ...userDTO, profile: profileDTO },
    });
  } catch (e) {
    next(e);
  }
};
