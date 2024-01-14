import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@entities/Article';
import { User } from '@entities/User';
// import { Avatar } from '@shared/ui/Avatar';
import { Button } from '@shared/ui/Button';
import { HStack, VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { canEditArticle } from '../model/selectors/canEditArticle';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
}

// TODO

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
    <VStack gap="32" className={className}>
      <HStack gap="8">
        {/* <Avatar src={author.avatar} size={32} /> */}
        <Typography bold>{author.email}</Typography>
        <Typography>{createdAt}</Typography>
      </HStack>
      {canEdit && <Button onClick={onEditArticle}>{t('edit')}</Button>}
      <Typography>{t('{{count}} views', { count: views })}</Typography>
    </VStack>
  );
};
