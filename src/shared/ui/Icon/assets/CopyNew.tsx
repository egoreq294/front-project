import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="13"
    height="15"
    viewBox="0 0 13 15"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M1.52941 15C1.10882 15 0.748648 14.853 0.448883 14.559C0.149119 14.265 -0.000508506 13.912 1.29831e-06 13.5V3H1.52941V13.5H9.94118V15H1.52941ZM4.58824 12C4.16765 12 3.80747 11.853 3.50771 11.559C3.20794 11.265 3.05831 10.912 3.05882 10.5V1.5C3.05882 1.0875 3.20871 0.734251 3.50847 0.440251C3.80824 0.146251 4.16816 -0.000498727 4.58824 1.27335e-06H11.4706C11.8912 1.27335e-06 12.2514 0.147001 12.5511 0.441001C12.8509 0.735001 13.0005 1.088 13 1.5V10.5C13 10.9125 12.8501 11.2658 12.5504 11.5598C12.2506 11.8538 11.8907 12.0005 11.4706 12H4.58824ZM4.58824 10.5H11.4706V1.5H4.58824V10.5Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const CopyNew = memo(ForwardRef);
