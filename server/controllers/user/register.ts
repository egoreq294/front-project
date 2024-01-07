import { validationResult } from "express-validator";
import { ApiError } from "../../exceptions";
import { register as registerService } from "../../services/user";
import { Request, Response, NextFunction } from "express";

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

    const { email, password } = req.body;

    const userData = await registerService({
      email,
      password,
    });

    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return res.json(userData);
  } catch (e) {
    next(e);
  }
};
