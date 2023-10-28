import React, { FC, memo } from 'react';

import { Typography } from '@shared/ui/Typography/Typography';
import { ArticleImageBlock as ArticleImageBlockType } from '../../model/types/article';

import styles from './styles.module.scss';

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
