import React, {
  FC,
  ImgHTMLAttributes,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

/**
 * @deprecated
 */
export const AppImage: FC<AppImageProps> = ({
  className,
  src,
  alt = '',
  fallback,
  errorFallback,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';

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
