import { Request, Response, NextFunction } from "express";
import { getUserById as getUserByIdService } from "../../services";
import { getNotificationsDTO } from "../../utils";

export const getNotifications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { _id: userId },
    } = req.body;

    const user = await getUserByIdService(userId);

    const notificationsDTO = await getNotificationsDTO(user);

    return res.json(notificationsDTO);
  } catch (e) {
    next(e);
  }
};
