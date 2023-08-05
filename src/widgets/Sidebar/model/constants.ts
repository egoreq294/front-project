import { routePath } from '@shared/config/routeConfig/routeConfig';
import { SidebarItemType } from './types';

import HomeIcon from '@shared/assets/icons/home.svg';
import AboutIcon from '@shared/assets/icons/about.svg';
import ProfileIcon from '@shared/assets/icons/profile.svg';
import ArticleIcon from '@shared/assets/icons/article.svg';

export const SIDEBAR_ITEMS_LIST: SidebarItemType[] = [
  {
    path: routePath.main,
    text: 'home-link',
    Icon: HomeIcon,
  },
  {
    path: routePath.about,
    text: 'about-link',
    Icon: AboutIcon,
  },
  {
    path: routePath.profile,
    text: 'profile-link',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: routePath.articles,
    text: 'article-link',
    Icon: ArticleIcon,
    authOnly: true,
  },
];
