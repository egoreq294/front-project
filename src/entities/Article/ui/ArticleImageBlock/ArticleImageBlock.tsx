import React, { FC, memo } from 'react';
import styles from './styles.module.scss';
import { ArticleImageBlock as ArticleImageBlockType } from '../../model/types/article';
import { Typography } from '@shared/ui/Typography/Typography';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlockType;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo(
  ({ className, block }) => {
    return (
      <div className={className}>
        <img src={block.src} alt={block.title} className={styles.Image} />
        {block.title && <Typography>{block.title}</Typography>}
      </div>
    );
  },
);
