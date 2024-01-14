import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData): SidebarItemType[] => [
    {
      path: '/',
      text: 'home-link',
      iconName: 'HomeNew',
    },
    {
      path: '/about',
      text: 'about-link',
      iconName: 'Info',
    },
    {
      path: `/profile/${userData?.profile?.id}`,
      text: 'profile-link',
      iconName: 'AvatarNew',
      authOnly: true,
    },
    {
      path: '/articles',
      text: 'article-link',
      iconName: 'ArticleNew',
      authOnly: true,
    },
  ],
);
