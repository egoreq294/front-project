import cn from 'classnames';
import React, { FC, useState } from 'react';

import Star from '@shared/assets/icons/star.svg';
import { HStack } from '../Stack';

import styles from './styles.module.scss';

interface StarRatingProps {
  className?: string;
  onSelect?: (startCount: number) => void;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = ({
  className,
  onSelect,
  selectedStars = 0,
}) => {
  const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starCount);
    }
  };

  const onLeave = (): void => {
    if (!isSelected) {
      setCurrentStarCount(0);
    }
  };

  const onClick = (starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount);
      setCurrentStarCount(starCount);
      setIsSelected(true);
    }
  };

  return (
    <HStack gap="4" className={className}>
      {stars.map((item) => (
        <Star
          onMouseLeave={onLeave}
          onMouseEnter={onHover(item)}
          className={cn(styles.Icon, {
            [styles.Hover]: currentStarCount >= item,
            [styles.Selected]: isSelected,
          })}
          key={item}
          onClick={onClick(item)}
        />
      ))}
    </HStack>
  );
};