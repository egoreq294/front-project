import { ObjectId } from "mongodb";
import { getProfileById } from "../../services";
import { getProfileDTO } from "../profile";
import { UserModel } from "../../models/User";
import { ProfileDTO } from "../profile/getProfileDTO";

export type NotificationDTO = {
  id: ObjectId;
  title: string;
  description: string | null;
  profile: ProfileDTO;
  href: string | null;
};

export const getNotificationsDTO = async (
  userModel: InstanceType<typeof UserModel>
): Promise<NotificationDTO[]> => {
  const notificationsDTO = await Promise.all(
    userModel.notifications.map(async (notification) => {
      const profile = await getProfileById(notification.profileId);

      return {
        id: notification._id,
        title: notification.title,
        profile: getProfileDTO(profile),
        description: notification.description || null,
        href: notification.href || null,
      };
    })
  );

  return notificationsDTO;
};
