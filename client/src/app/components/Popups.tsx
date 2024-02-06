import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { getPopups } from '@shared/lib/popups/popupSelectors';
import { removePopup } from '@shared/lib/popups/popupSlice';
import { Popup } from '@shared/ui/Popup/Popup';

export const Popups: FC = () => {
  const popups = useSelector(getPopups);
  const dispatch = useAppDispatch();

  return (
    <>
      {popups.map(({ id, className, title, description, onClose, testId }) => (
        <Popup
          key={id}
          title={title}
          description={description}
          className={className}
          isOpen
          onClose={(): void => {
            onClose?.();
            dispatch(removePopup(id));
          }}
          testId={testId}
        />
      ))}
    </>
  );
};
