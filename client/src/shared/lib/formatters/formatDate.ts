import dayjs from 'dayjs';

import { DATE_FORMAT, EMPTY_PLACEHOLDER } from '@shared/constants/common';

export const formatDate = (
  date: string | Date | null | undefined,
  format: string = DATE_FORMAT,
  placeholder: string = EMPTY_PLACEHOLDER,
): string => {
  if (!date) {
    return placeholder;
  }

  return dayjs(date).format(format);
};
