import { Request, Response, NextFunction } from "express";
import { ApiError } from "../exceptions";

export const errorMiddleware = (
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  console.error(err);

  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }

  return res.status(500).json({ message: "Непредвиденная ошибка" });
};
