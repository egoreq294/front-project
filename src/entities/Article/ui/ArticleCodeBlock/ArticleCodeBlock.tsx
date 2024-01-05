import cn from 'classnames';
import React, { FC, memo } from 'react';

import { Code } from '@shared/ui/Code';
import { ArticleCodeBlock as ArticleCodeBlockType } from '../../model/types/article';

import styles from './styles.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockType;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo(
  ({ className, block }) => {
    return <Code text={block.code} className={cn(styles.Code, className)} />;
  },
);
