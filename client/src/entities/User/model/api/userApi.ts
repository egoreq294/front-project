import { rtkApi } from '@shared/api/rtkApi';
import { JsonSettings } from '../types/jsonSettings';
import { User } from '../types/user';

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, JsonSettings>({
      query: (jsonSettings) => ({
        url: `/user`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
    getUserData: build.query<User, void>({
      query: () => ({
        url: `/user`,
        method: 'GET',
        params: {
          _expand: 'profile',
        },
      }),
    }),
  }),
});

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;

export const getUserDataQuery = userApi.endpoints.getUserData.initiate;
