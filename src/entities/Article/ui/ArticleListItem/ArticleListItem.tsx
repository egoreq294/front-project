import cn from 'classnames';
import React, { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { AppImage } from '@shared/ui/deprecated/AppImage';
import { AppLink } from '@shared/ui/deprecated/AppLink';
import { Avatar } from '@shared/ui/deprecated/Avatar';
import { Button } from '@shared/ui/deprecated/Button';
import { Card } from '@shared/ui/deprecated/Card';
import { Skeleton } from '@shared/ui/deprecated/Skeleton';
import { Typography } from '@shared/ui/deprecated/Typography';
import { Icon } from '@shared/ui/Icon';
import { ArticleBlockTypeEnum } from '../../model/constants/article';
import {
  Article,
  ArticleTextBlock as ArticleTextBlockType,
  ArticleViewMode,
} from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import styles from './styles.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  viewMode: ArticleViewMode;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = ({
  article,
  viewMode,
  className,
  target,
}) => {
  const { t } = useTranslation('article');

  if (viewMode === 'List') {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockTypeEnum.TEXT,
    ) as ArticleTextBlockType;

    return (
      <div
        className={cn(styles.ArticleListItem, styles.List, className)}
        data-testid="ArticleListItem"
      >
        <Card>
          <div className={styles.Header}>
            <Avatar size={30} src={article.user.avatar} />
            <Typography className={styles.Username}>
              {article.user.username}
            </Typography>
            <Typography className={styles.Date}>{article.createdAt}</Typography>
          </div>
          <Typography className={styles.Title}>{article.title}</Typography>
          <Typography className={styles.Types}>
            {article.type.join(', ')}
          </Typography>
          <AppImage
            fallback={<Skeleton width="100%" height="250px" />}
            src={article.img}
            className={styles.Image}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={styles.TextBlock} />
          )}
          <div className={styles.Footer}>
            <AppLink to={`/articles/${article.id}`}>
              <Button variant="Secondary">{t('read-more')}</Button>
            </AppLink>
            <Typography className={styles.Views}>
              {String(article.views)}
            </Typography>
            <Icon name="Eye" />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={`/articles/${article.id}`}
      className={cn(styles.ArticleListItem, styles.Plate, className)}
      data-testid="ArticleListItem"
    >
      <Card>
        <div className={styles.ImageWrapper}>
          <AppImage
            src={article.img}
            className={styles.Image}
            alt={article.title}
            fallback={<Skeleton width="200px" height="200px" />}
          />
          <Typography className={styles.Date}>{article.createdAt}</Typography>
        </div>
        <div className={styles.InfoWrapper}>
          <Typography className={styles.Types}>
            {article.type.join(', ')}
          </Typography>
          <Typography className={styles.Views}>
            {String(article.views)}
          </Typography>
          <Icon name="Eye" />
        </div>
        <Typography className={styles.Title}>{article.title}</Typography>
      </Card>
    </AppLink>
  );
};
