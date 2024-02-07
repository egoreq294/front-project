import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData): SidebarItemType[] => [
    {
      path: '/',
      text: 'article-link',
      iconName: 'ArticleNew',
    },
    {
      path: `/profile/${userData?.profile?.id}`,
      text: 'profile-link',
      iconName: 'AvatarNew',
      authOnly: true,
    },
  ],
);
