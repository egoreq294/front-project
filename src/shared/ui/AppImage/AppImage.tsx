import React, {
  FC,
  ImgHTMLAttributes,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

import { EMPTY_STRING } from '@shared/constants/common';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage: FC<AppImageProps> = ({
  className,
  src,
  alt = EMPTY_STRING,
  fallback,
  errorFallback,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? EMPTY_STRING;

    img.onload = (): void => {
      setIsLoading(false);
    };

    img.onerror = (): void => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img src={src} alt={alt} className={className} {...props} />;
};
