import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M8.6 3C8.6 2.66863 8.33137 2.4 8 2.4C7.66863 2.4 7.4 2.66863 7.4 3V7.4L3 7.4C2.66863 7.4 2.4 7.66863 2.4 8C2.4 8.33137 2.66863 8.6 3 8.6L7.4 8.6V13C7.4 13.3314 7.66863 13.6 8 13.6C8.33137 13.6 8.6 13.3314 8.6 13V8.6L13 8.6C13.3314 8.6 13.6 8.33137 13.6 8C13.6 7.66863 13.3314 7.4 13 7.4L8.6 7.4V3Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Add = memo(ForwardRef);
