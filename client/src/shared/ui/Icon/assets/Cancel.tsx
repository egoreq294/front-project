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
      d="M4.42426 3.57573C4.18994 3.34142 3.81004 3.34142 3.57573 3.57573C3.34142 3.81004 3.34142 4.18994 3.57573 4.42426L7.15147 7.99999L3.57573 11.5757C3.34142 11.81 3.34142 12.1899 3.57573 12.4243C3.81004 12.6586 4.18994 12.6586 4.42426 12.4243L7.99999 8.84852L11.5757 12.4243C11.81 12.6586 12.1899 12.6586 12.4243 12.4243C12.6586 12.1899 12.6586 11.81 12.4243 11.5757L8.84852 7.99999L12.4243 4.42426C12.6586 4.18994 12.6586 3.81004 12.4243 3.57573C12.1899 3.34142 11.81 3.34142 11.5757 3.57573L7.99999 7.15147L4.42426 3.57573Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Cancel = memo(ForwardRef);
