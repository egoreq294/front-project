import React, { FC, memo } from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Caption } from '@shared/ui/Caption/Caption';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import EyeIcon from '@shared/assets/icons/eye.svg';
import CalendarIcon from '@shared/assets/icons/calendar.svg';
import { Article, ArticleBlockTypeEnum } from '../../model/types/article';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { Typography } from '@shared/ui/Typography/Typography';

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
        <div className={styles.Error}>
          <Typography variant="M">{t('technical-error')}</Typography>
        </div>
      );
    }

    return (
      <>
        <div className={styles.AvatarWrapper}>
          <Avatar size={200} src={article?.img} className={styles.Avatar} />
        </div>
        <Caption
          className={styles.Title}
          label={article?.title}
          value={article?.subtitle}
          size="M"
        />
        <div className={styles.ArticleInfo}>
          <EyeIcon />
          <Typography>{String(article?.views)}</Typography>
        </div>
        <div className={styles.ArticleInfo}>
          <CalendarIcon />
          <Typography>{article?.createdAt}</Typography>
        </div>
        <div className={styles.Blocks}>
          {article?.blocks.map((block) => (
            <div key={block.id}>
              {block.type === ArticleBlockTypeEnum.CODE && (
                <ArticleCodeBlock block={block} />
              )}
              {block.type === ArticleBlockTypeEnum.IMAGE && (
                <ArticleImageBlock block={block} />
              )}
              {block.type === ArticleBlockTypeEnum.TEXT && (
                <ArticleTextBlock block={block} />
              )}
            </div>
          ))}
        </div>
      </>
    );
  },
);
