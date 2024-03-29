import { refresh as refreshService } from "../../services/user";
import { Request, Response, NextFunction } from "express";

export const refresh = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;

    const refreshData = await refreshService(refreshToken);

    res.cookie("refreshToken", refreshData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return res.json(refreshData);
  } catch (e) {
    next(e);
  }
};
