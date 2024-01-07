import { Request, Response, NextFunction } from "express";
import { getUsers as getUsersService } from "../../services";

export const getUsers = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsersService();
    return res.json(users);
  } catch (e) {
    next(e);
  }
};
