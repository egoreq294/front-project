import { ObjectId } from "mongodb";
import { UserModel } from "../../models/User";
import { ApiError } from "../../exceptions";

type CreateNotificationArgs = {
  userId: string | ObjectId;
  profileId: string | ObjectId;
  title: string;
  description?: string;
  href?: string;
};

export const createNotification = async (args: CreateNotificationArgs) => {
  const { title, description, href, userId, profileId } = args;

  const updatedUser = await UserModel.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $push: {
        notifications: { title, description, href, profileId },
      },
    },
    { new: true }
  );

  if (!updatedUser) {
    throw ApiError.BadRequest("Во время создания уведомления произошла ошибка");
  }

  return updatedUser;
};
