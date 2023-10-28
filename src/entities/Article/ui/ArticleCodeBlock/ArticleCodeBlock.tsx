import React, { FC, memo } from 'react';

import { Code } from '@shared/ui/Code/Code';
import { ArticleCodeBlock as ArticleCodeBlockType } from '../../model/types/article';

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
