import { Request, Response, NextFunction } from "express";
import {
  createNotification as createNotificationService,
  getUserById as getUserByIdService,
} from "../../services";
import { getNotificationsDTO } from "../../utils";

export const createNotification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { _id: userId },
      title,
      description,
      href,
    } = req.body;

    const user = await getUserByIdService(userId);

    const updatedUser = await createNotificationService({
      userId,
      title,
      description,
      href,
      profileId: user.profile,
    });

    const notificationsDTO = await getNotificationsDTO(updatedUser);

    return res.json(notificationsDTO);
  } catch (e) {
    next(e);
  }
};
