import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

import { EMPTY_STRING } from '@shared/constants/common';
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from '@shared/constants/localstorage';

type Tokens = { refreshToken: string; accessToken: string };

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: __API__,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token =
      localStorage.getItem(ACCESS_TOKEN_LOCALSTORAGE_KEY) || EMPTY_STRING;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        const tokens = refreshResult.data as Tokens;

        if (tokens) {
          localStorage.setItem(
            ACCESS_TOKEN_LOCALSTORAGE_KEY,
            tokens.accessToken,
          );
          result = await baseQuery(args, api, extraOptions);
        } else {
          throw new Error();
        }
      } catch {
        console.error('unauthorized');
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
