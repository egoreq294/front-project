import { ObjectId } from "mongodb";
import { UserModel } from "../../models/User";
import { ApiError } from "../../exceptions";

type DeleteNotificationByIdArgs = {
  userId: string | ObjectId;
  notificationId: string | ObjectId;
};

export const deleteNotificationById = async (
  args: DeleteNotificationByIdArgs
) => {
  const { userId, notificationId } = args;

  const updatedUser = await UserModel.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $pull: {
        notifications: { _id: notificationId },
      },
    },
    { new: true }
  );

  if (!updatedUser) {
    throw ApiError.BadRequest("Во время удаления уведомления произошла ошибка");
  }

  return updatedUser;
};
