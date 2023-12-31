import React, { FC, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { EMPTY_STRING } from '@shared/constants/common';
import { Button } from '@shared/ui/Button';
import { Card } from '@shared/ui/Card';
import { Drawer } from '@shared/ui/Drawer';
import { Input } from '@shared/ui/Input';
import { Modal } from '@shared/ui/Modal';
import { HStack, VStack } from '@shared/ui/Stack';
import { StarRating } from '@shared/ui/StarRating';
import { Typography } from '@shared/ui/Typography';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (startsCount: number) => void;
  onAccept?: (startsCount: number, feedback?: string) => void;
  selectedStars?: number;
}

export const RatingCard: FC<RatingCardProps> = ({
  className,
  title,
  feedbackTitle,
  hasFeedback,
  onAccept,
  onCancel,
  selectedStars,
}) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState<number>(selectedStars ?? 0);
  const [feedback, setFeedback] = useState(EMPTY_STRING);

  const onSelectStars = (selectedStarCount: number): void => {
    setStarsCount(selectedStarCount);
    if (hasFeedback) {
      setIsModalOpen(true);
      return;
    }

    onAccept?.(selectedStarCount);
  };

  const onAcceptModal = (): void => {
    onAccept?.(starsCount, feedback);
    setIsModalOpen(false);
  };

  const onCancelModal = (): void => {
    onCancel?.(starsCount);
    setIsModalOpen(false);
  };

  const modalContent = (
    <VStack fullWidth gap="32">
      <Typography variant="M">{feedbackTitle}</Typography>
      <Input
        label={t('your-feedback')}
        onChange={setFeedback}
        testId="Feedback"
      />
      <HStack fullWidth gap="16" justify="end">
        <Button variant="Danger" onClick={onCancelModal} testId="CancelRating">
          {t('cancel')}
        </Button>
        <Button variant="Success" onClick={onAcceptModal} testId="SendFeedback">
          {t('send')}
        </Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={className} data-testid="RatingCard" fullWidth>
      <VStack align="center" gap="8">
        {title && (
          <Typography variant="M">
            {starsCount ? t('thank-you-for-rating') : title}
          </Typography>
        )}
        <StarRating onSelect={onSelectStars} selectedStars={starsCount} />
      </VStack>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={onCancelModal}>
          {modalContent}
        </Drawer>
      </MobileView>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy onClose={onCancelModal}>
          {modalContent}
        </Modal>
      </BrowserView>
    </Card>
  );
};
