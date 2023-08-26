import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import {
  Article,
  ArticleBlockTypeEnum,
  ArticleViewMode,
  ArticleTextBlock as ArticleTextBlockType,
} from '../../model/types/article';
import { Caption } from '@shared/ui/Caption/Caption';
import EyeIcon from '@shared/assets/icons/eye.svg';
import { Card } from '@shared/ui/Card/Card';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import { Button } from '@shared/ui/Button/Button';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { useNavigate } from 'react-router-dom';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  viewMode: ArticleViewMode;
}

export const ArticleListItem: FC<ArticleListItemProps> = ({
  article,
  viewMode,
  className,
}) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(`/articles/${article.id}`);
  }, [navigate, article.id]);

  if (viewMode === 'List') {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockTypeEnum.TEXT,
    ) as ArticleTextBlockType;

    return (
      <div className={cn(styles.ArticleListItem, styles.List, className)}>
        <Card>
          <div className={styles.Header}>
            <Avatar size={30} src={article.user.avatar} />
            <Caption
              value={article.user.username}
              className={styles.Username}
            />
            <Caption value={article.createdAt} className={styles.Date} />
          </div>
          <Caption value={article.title} className={styles.Title} />
          <Caption value={article.type.join(', ')} className={styles.Types} />
          <img src={article.img} className={styles.Image} alt={article.title} />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={styles.TextBlock} />
          )}
          <div className={styles.Footer}>
            <Button variant="Secondary" onClick={onOpenArticle}>
              {t('read-more')}
            </Button>
            <Caption value={String(article.views)} className={styles.Views} />
            <EyeIcon />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(styles.ArticleListItem, styles.Plate, className)}>
      <Card onClick={onOpenArticle}>
        <div className={styles.ImageWrapper}>
          <img src={article.img} className={styles.Image} alt={article.title} />
          <Caption value={article.createdAt} className={styles.Date} />
        </div>
        <div className={styles.InfoWrapper}>
          <Caption value={article.type.join(', ')} className={styles.Types} />
          <Caption value={String(article.views)} className={styles.Views} />
          <EyeIcon />
        </div>
        <Caption value={article.title} className={styles.Title} />
      </Card>
    </div>
  );
};
