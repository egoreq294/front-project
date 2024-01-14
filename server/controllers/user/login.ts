import { login as loginService } from "../../services/user";
import { Request, Response, NextFunction } from "express";
import { getProfileDTO, getUserDTO } from "../../utils";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const { accessToken, refreshToken, user, profile } = await loginService({
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
