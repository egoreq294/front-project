import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M1.28572 0C0.575638 0 4.15742e-06 0.511675 4.15742e-06 1.14286C4.15742e-06 1.77404 0.575644 2.28571 1.28572 2.28571H16.7143C17.4244 2.28571 18 1.77404 18 1.14286C18 0.511675 17.4244 0 16.7143 0H1.28572Z"
      fill="currentColor"
    />
    <path
      d="M1.28572 9.14286C0.575644 9.14286 4.15742e-06 8.63118 4.15742e-06 8C4.15742e-06 7.36882 0.575634 6.85714 1.28571 6.85714H16.7143C17.4244 6.85714 18 7.36882 18 8C18 8.63118 17.4244 9.14286 16.7143 9.14286H1.28572Z"
      fill="currentColor"
    />
    <path
      d="M1.28572 16C0.575638 16 4.15742e-06 15.4883 4.15742e-06 14.8571C4.15742e-06 14.226 0.575633 13.7143 1.28571 13.7143H16.7143C17.4244 13.7143 18 14.226 18 14.8571C18 15.4883 17.4244 16 16.7143 16H1.28572Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ListNew = memo(ForwardRef);
