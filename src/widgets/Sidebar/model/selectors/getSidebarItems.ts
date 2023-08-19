import { getUserAuthData } from '@entities/User';
import { createSelector } from '@reduxjs/toolkit';
import HomeIcon from '@shared/assets/icons/home.svg';
import AboutIcon from '@shared/assets/icons/about.svg';
import ProfileIcon from '@shared/assets/icons/profile.svg';
import ArticleIcon from '@shared/assets/icons/article.svg';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => [
  {
    path: '/',
    text: 'home-link',
    Icon: HomeIcon,
  },
  {
    path: '/about',
    text: 'about-link',
    Icon: AboutIcon,
  },
  {
    path: `/profile/${userData?.id}`,
    text: 'profile-link',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: '/articles',
    text: 'article-link',
    Icon: ArticleIcon,
    authOnly: true,
  },
]);
