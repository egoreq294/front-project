import { Request, Response, NextFunction } from "express";
import { deleteNotificationById as deleteNotificationByIdService } from "../../services";
import { getNotificationsDTO } from "../../utils";

export const deleteNotificationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { _id: userId },
      notificationId,
    } = req.body;

    const updatedUser = await deleteNotificationByIdService({
      userId,
      notificationId,
    });

    const notificationsDTO = await getNotificationsDTO(updatedUser);

    return res.json(notificationsDTO);
  } catch (e) {
    next(e);
  }
};
