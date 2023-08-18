import React, { FC, memo } from 'react';
import styles from './styles.module.scss';
import { ArticleTextBlock as ArticleTextBlockType } from '@entities/Article/model/types/article';
import { Caption } from '@shared/ui/Caption/Caption';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockType;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo(
  ({ className, block }) => {
    return (
      <div className={className}>
        {block.title && (
          <Caption label={block.title} className={styles.Title} />
        )}
        {block.paragraphs.map((paragraph, index) => (
          <Caption key={index} value={paragraph} className={styles.Paragraph} />
        ))}
      </div>
    );
  },
);
