import React, { FC, memo } from 'react';
import { ArticleCodeBlock as ArticleCodeBlockType } from '../../model/types/article';
import { Code } from '@shared/ui/Code/Code';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockType;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo(
  ({ className, block }) => {
    return (
      <div className={className}>
        <Code text={block.code} />
      </div>
    );
  },
);
