import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M0.362853 0.773793C-0.0330964 1.15882 -0.0419546 1.79192 0.343068 2.18787L5.22308 7.20638C5.43415 7.42344 5.71977 7.52417 6 7.50745C6.28024 7.52417 6.56586 7.42344 6.77692 7.20638L11.6569 2.18787C12.042 1.79192 12.0331 1.15882 11.6372 0.773793C11.2412 0.388771 10.6081 0.397629 10.2231 0.793578L6 5.13651L1.77693 0.793578C1.39191 0.397629 0.758803 0.388771 0.362853 0.773793Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Arrow = memo(ForwardRef);
