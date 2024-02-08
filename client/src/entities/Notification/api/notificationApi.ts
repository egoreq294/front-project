import { rtkApi } from '@shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/user/notifications',
      }),
    }),
    deleteNotification: build.mutation<Notification[], string>({
      query: (notificationId) => ({
        url: '/user/notifications',
        method: 'DELETE',
        body: {
          notificationId,
        },
      }),
    }),
  }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
export const useDeleteNotification =
  notificationApi.useDeleteNotificationMutation;
