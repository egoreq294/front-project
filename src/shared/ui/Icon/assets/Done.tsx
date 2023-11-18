import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M6.36364 12.6567L1.59091 7.64179L0 9.31343L6.36364 16L20 1.67164L18.4091 0L6.36364 12.6567Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Done = memo(ForwardRef);