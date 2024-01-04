import React, { FC, memo } from 'react';

import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { ArticleTextBlock as ArticleTextBlockType } from '../../model/types/article';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockType;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo(
  ({ className, block }) => {
    return (
      <VStack className={className} gap="16">
        {block.title && <Typography variant="M">{block.title}</Typography>}
        <VStack gap="8">
          {block.paragraphs.map((paragraph, index) => (
            <Typography key={index}>{paragraph}</Typography>
          ))}
        </VStack>
      </VStack>
    );
  },
);
