import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { EMPTY_STRING } from '@shared/constants/common';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Icon } from '@shared/ui/Icon';
import { IconButton } from '@shared/ui/IconButton';
import { Input } from '@shared/ui/Input';
import { HStack } from '@shared/ui/Stack';
import { getCommentFormText } from '../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../model/slices/addCommentFormSlice';

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

  const onTextChange = useCallback(
    (value: string): void => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text);
    onTextChange(EMPTY_STRING);
  }, [text, onSendComment, onTextChange]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        fullWidth
        gap="24"
        className={className}
        data-testid="CommentForm"
      >
        <Input
          placeholder={t('enter-comment-text')}
          addonLeft={<Icon name="Search" width={32} height={32} />}
          value={text}
          onChange={onTextChange}
          testId="Comment"
        />
        <IconButton
          name="Send"
          width={32}
          height={32}
          onClick={onSendHandler}
          testId="Send"
        />
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
