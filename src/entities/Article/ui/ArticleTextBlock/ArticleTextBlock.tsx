import React, { FC, memo } from 'react';
import styles from './styles.module.scss';
import { ArticleTextBlock as ArticleTextBlockType } from '../../model/types/article';
import { Typography } from '@shared/ui/Typography/Typography';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockType;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo(
  ({ className, block }) => {
    return (
      <div className={className}>
        {block.title && (
          <Typography variant="M" className={styles.Title}>
            {block.title}
          </Typography>
        )}
        {block.paragraphs.map((paragraph, index) => (
          <Typography key={index} className={styles.Paragraph}>
            {paragraph}
          </Typography>
        ))}
      </div>
    );
  },
);
