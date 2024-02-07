import { Request, Response, NextFunction } from "express";
import { updateUser as updateUserService } from "../../services";
import { getUserDTO } from "../../utils";

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { _id: id },
      email,
      username,
      avatar,
      features,
      jsonSettings,
    } = req.body;

    const updatedUser = await updateUserService({
      id,
      email,
      username,
      avatar,
      features,
      jsonSettings,
    });

    const userDTO = getUserDTO(updatedUser);

    return res.json(userDTO);
  } catch (e) {
    next(e);
  }
};
