import axios from 'axios';

import { EMPTY_STRING } from '@shared/constants/common';
import {
  ACCESS_TOKEN_LOCALSTORAGE_KEY,
  USER_LOCALSTORAGE_KEY,
} from '@shared/constants/localstorage';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization =
      localStorage.getItem(USER_LOCALSTORAGE_KEY) || EMPTY_STRING;
  }

  return config;
});

export const $apiNew = axios.create({
  baseURL: __API_NEW__,
  withCredentials: true,
});

$apiNew.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${
      localStorage.getItem(ACCESS_TOKEN_LOCALSTORAGE_KEY) || EMPTY_STRING
    }`;
  }

  return config;
});

$apiNew.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status == 401 && error.config && !error.config.isRetry) {
      originalRequest.isRetry = true;
      try {
        const response = await axios.get(`${__API_NEW__}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem(
          ACCESS_TOKEN_LOCALSTORAGE_KEY,
          response.data.accessToken,
        );
        return await $apiNew.request(originalRequest);
      } catch (e) {
        console.error('unauthorized');
      }
    }
    throw error;
  },
);
