import { rtkApi } from '@shared/api/rtkApi';

const logoutApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const useLogout = logoutApi.useLogoutMutation;
