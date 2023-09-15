import { EMPTY_STRING } from '@shared/constants/common';
import { getQueryParams } from './getQueryParams';

export const addQueryParams = (
  params: Partial<Record<string, string>>,
): void => {
  window.history.pushState(null, EMPTY_STRING, getQueryParams(params));
};
