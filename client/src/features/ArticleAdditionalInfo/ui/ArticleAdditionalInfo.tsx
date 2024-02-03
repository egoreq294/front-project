import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@entities/Article';
import { Profile } from '@entities/Profile';
import { formatDate } from '@shared/lib/formatters';
import { Avatar } from '@shared/ui/Avatar';
import { Button } from '@shared/ui/Button';
import { HStack, VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { canEditArticle } from '../model/selectors/canEditArticle';
import { ArticleRating } from './ArticleRating';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: Profile;
  createdAt: string;
  views: number;
}

export const ArticleAdditionalInfo: FC<ArticleAdditionalInfoProps> = ({
  className,
  author,
  createdAt,
  views,
}) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const canEdit = useSelector(canEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onEditArticle = useCallback(() => {
    navigate(`/articles/${article?.id}/edit`);
  }, [navigate, article]);

  return (
    <VStack gap="16" className={className}>
      {canEdit && <Button onClick={onEditArticle}>{t('edit')}</Button>}
      <HStack gap="8">
        <Avatar src={author.avatar} size={32} />
        <Typography bold>{`${author.lastName} ${author.firstName}`}</Typography>
      </HStack>
      <Typography>{formatDate(createdAt)}</Typography>
      <HStack justify="spaceBetween" fullWidth>
        <Typography>{t('{{count}} views', { count: views })}</Typography>
        <ArticleRating article={article} />
      </HStack>
    </VStack>
  );
};
