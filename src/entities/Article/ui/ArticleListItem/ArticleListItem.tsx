import cn from 'classnames';
import React, { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { AppImage } from '@shared/ui/AppImage';
import { AppLink } from '@shared/ui/AppLink';
import { Avatar } from '@shared/ui/Avatar';
import { Button } from '@shared/ui/Button';
import { Card } from '@shared/ui/Card';
import { Icon } from '@shared/ui/Icon';
import { Skeleton } from '@shared/ui/Skeleton';
import { HStack, VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { ArticleBlockTypeEnum } from '../../model/constants/article';
import {
  Article,
  ArticleTextBlock as ArticleTextBlockType,
  ArticleViewMode,
} from '../../model/types/article';

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
      <div className={cn(styles.List, className)} data-testid="ArticleListItem">
        <Card padding="24">
          <VStack gap="16">
            <HStack gap="8">
              <Avatar size={32} src={article.user?.avatar} />
              <Typography bold>{article.user?.username}</Typography>
              <Typography>{article.createdAt}</Typography>
            </HStack>
            <Typography variant="L" bold>
              {article.title}
            </Typography>
            <Typography variant="M">{article.subtitle}</Typography>
            <AppImage
              fallback={<Skeleton width="100%" height="420px" />}
              src={article.img}
              className={styles.Image}
              alt={article.title}
            />
            {textBlock?.paragraphs && (
              <Typography className={styles.TextBlock}>
                {textBlock.paragraphs.slice(0, 2).join(' ')}
              </Typography>
            )}
            <HStack justify="spaceBetween" fullWidth>
              <AppLink to={`/articles/${article.id}`}>
                <Button variant="Primary">{t('read-more')}</Button>
              </AppLink>
              <HStack gap="8">
                <Icon name="EyeNew" className={styles.Icon} />
                <Typography>{String(article.views)}</Typography>
              </HStack>
            </HStack>
          </VStack>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={`/articles/${article.id}`}
      className={cn(styles.Plate, className)}
      data-testid="ArticleListItem"
    >
      <Card padding="0" className={styles.Card}>
        <VStack gap="4">
          <AppImage
            src={article.img}
            className={styles.Image}
            alt={article.title}
            fallback={<Skeleton width="100%" height="140px" />}
          />
          <VStack gap="4" className={styles.Content}>
            <Typography variant="M" className={styles.Title}>
              {article.title}
            </Typography>
            <HStack fullWidth justify="spaceBetween">
              <Typography>{article.createdAt}</Typography>
              <HStack gap="4">
                <Icon name="Eye" className={styles.Icon} />
                <Typography className={styles.Views}>
                  {String(article.views)}
                </Typography>
              </HStack>
            </HStack>
            <HStack gap="8">
              <Avatar size={32} src={article.user?.avatar} />
              <Typography bold>{article.user?.username}</Typography>
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
};
