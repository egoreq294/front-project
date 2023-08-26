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
import EyeIcon from '@shared/assets/icons/eye.svg';
import { Card } from '@shared/ui/Card/Card';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import { Button } from '@shared/ui/Button/Button';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@shared/ui/Typography/Typography';

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
            <Typography className={styles.Username}>
              {article.user.username}
            </Typography>
            <Typography className={styles.Date}>{article.createdAt}</Typography>
          </div>
          <Typography className={styles.Title}>{article.title}</Typography>
          <Typography className={styles.Types}>
            {article.type.join(', ')}
          </Typography>
          <img src={article.img} className={styles.Image} alt={article.title} />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={styles.TextBlock} />
          )}
          <div className={styles.Footer}>
            <Button variant="Secondary" onClick={onOpenArticle}>
              {t('read-more')}
            </Button>
            <Typography className={styles.Views}>
              {String(article.views)}
            </Typography>
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
          <Typography className={styles.Date}>{article.createdAt}</Typography>
        </div>
        <div className={styles.InfoWrapper}>
          <Typography className={styles.Types}>
            {article.type.join(', ')}
          </Typography>
          <Typography className={styles.Views}>
            {String(article.views)}
          </Typography>
          <EyeIcon />
        </div>
        <Typography className={styles.Title}>{article.title}</Typography>
      </Card>
    </div>
  );
};
