import React, { FC, Fragment, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppImage } from '@shared/ui/AppImage';
import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { ArticleBlockTypeEnum } from '../../model/constants/article';
import { Article } from '../../model/types/article';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';

import styles from './styles.module.scss';

interface ArticleDetailsProps {
  article: Article | null;
  loading: boolean;
  error: string | null;
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ article, loading, error }) => {
    const { t } = useTranslation('article');

    if (loading) {
      return <ArticleDetailsSkeleton />;
    }

    if (error) {
      return (
        <VStack fullWidth className={styles.Error}>
          <Typography variant="M">{t('technical-error')}</Typography>
        </VStack>
      );
    }

    return (
      <VStack gap="24" fullWidth>
        <Typography variant="L" bold>
          {article?.title}
        </Typography>
        <Typography variant="M">{article?.subtitle}</Typography>
        <AppImage src={article?.img} className={styles.Image} />
        {article?.blocks.map((block) => (
          <Fragment key={block.id}>
            {block.type === ArticleBlockTypeEnum.CODE && (
              <ArticleCodeBlock block={block} />
            )}
            {block.type === ArticleBlockTypeEnum.IMAGE && (
              <ArticleImageBlock block={block} />
            )}
            {block.type === ArticleBlockTypeEnum.TEXT && (
              <ArticleTextBlock block={block} />
            )}
          </Fragment>
        ))}
      </VStack>
    );
  },
);
