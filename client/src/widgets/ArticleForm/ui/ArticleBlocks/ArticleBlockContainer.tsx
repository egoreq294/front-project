import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { Card } from '@shared/ui/Card';
import { IconButton } from '@shared/ui/IconButton';
import {
  ArticleBlock,
  ArticleFormSchema,
} from '../../model/types/ArticleFormSchema';

import styles from './styles.module.scss';

interface ArticleBlockContainerProps {
  className?: string;
  children?: ReactNode;
  block: ArticleBlock;
}

export const ArticleBlockContainer: FC<ArticleBlockContainerProps> = ({
  className,
  children,
  block,
}) => {
  const { getValues, setValue } = useFormContext<ArticleFormSchema>();

  const onCloseClick = (): void => {
    const blocks = getValues('blocks');
    const newBlocks = blocks.filter((item) => item.id !== block.id);
    setValue('blocks', newBlocks);
  };

  return (
    <Card
      padding="24"
      fullWidth
      className={cn(styles.ArticleBlockContainer, className)}
    >
      <IconButton
        name="Cancel"
        className={styles.CloseButton}
        onClick={onCloseClick}
      />
      {children}
    </Card>
  );
};
