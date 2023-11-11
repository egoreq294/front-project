import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData): SidebarItemType[] => [
    {
      path: '/',
      text: 'home-link',
      iconName: 'Home',
    },
    {
      path: '/about',
      text: 'about-link',
      iconName: 'About',
    },
    {
      path: `/profile/${userData?.id}`,
      text: 'profile-link',
      iconName: 'Profile',
      authOnly: true,
    },
    {
      path: '/articles',
      text: 'article-link',
      iconName: 'Article',
      authOnly: true,
    },
  ],
);
