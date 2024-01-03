import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20ZM10 18.5V1.5C12.2543 1.5 14.4163 2.39553 16.0104 3.98959C17.6045 5.58365 18.5 7.74566 18.5 10C18.5 12.2543 17.6045 14.4163 16.0104 16.0104C14.4163 17.6045 12.2543 18.5 10 18.5Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Theme = memo(ForwardRef);
