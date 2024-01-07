import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { EMPTY_STRING } from '@shared/constants/common';
import { USER_LOCALSTORAGE_KEY } from '@shared/constants/localstorage';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || EMPTY_STRING;

      if (token) {
        headers.set('Authorization', token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
