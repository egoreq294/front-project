import { logout as logoutService } from "../../services/user";
import { Request, Response, NextFunction } from "express";

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;

    const token = await logoutService(refreshToken);

    res.clearCookie("refreshToken");

    return res.json(token);
  } catch (e) {
    next(e);
  }
};
