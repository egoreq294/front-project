import React, { FC, MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@entities/User';
import { EMPTY_STRING } from '@shared/constants/common';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Icon } from '@shared/ui/Icon';
import { IconButton } from '@shared/ui/IconButton';
import { Input } from '@shared/ui/Input';
import { HStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { getCommentFormText } from '../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../model/slices/addCommentFormSlice';

import styles from './styles.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = ({
  className,
  onSendComment,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const text = useSelector(getCommentFormText);
  const authData = useSelector(getUserAuthData);

  const onTextChange = useCallback(
    (value: string): void => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      onSendComment(text);
      onTextChange(EMPTY_STRING);
    },
    [text, onSendComment, onTextChange],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <form className={styles.Form}>
        <HStack
          fullWidth
          gap="24"
          className={className}
          data-testid="CommentForm"
        >
          {!authData?.profile?.lastName || !authData.profile?.firstName ? (
            <Typography>
              {t('fill-firstname-or-lastname-to-send-a-comment')}
            </Typography>
          ) : (
            <>
              <Input
                placeholder={t('enter-comment-text')}
                addonLeft={<Icon name="Search" width={32} height={32} />}
                value={text}
                onChange={onTextChange}
                testId="Comment"
              />
              <IconButton
                type="submit"
                name="Send"
                width={32}
                height={32}
                onClick={onSendHandler}
                testId="Send"
              />
            </>
          )}
        </HStack>
      </form>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
