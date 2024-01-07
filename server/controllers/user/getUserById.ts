import { Request, Response, NextFunction } from "express";
import { getUserById as getUserByIdService } from "../../services";

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const user = await getUserByIdService(userId);
    return res.json(user);
  } catch (e) {
    next(e);
  }
};
