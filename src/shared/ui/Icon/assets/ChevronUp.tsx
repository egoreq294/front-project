import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M24.0999 17.1248L15.6999 8.6998C15.5999 8.5998 15.4916 8.52914 15.3749 8.4878C15.2582 8.4458 15.1332 8.4248 14.9999 8.4248C14.8666 8.4248 14.7416 8.4458 14.6249 8.4878C14.5082 8.52914 14.3999 8.5998 14.2999 8.6998L5.8749 17.1248C5.64157 17.3581 5.5249 17.6498 5.5249 17.9998C5.5249 18.3498 5.6499 18.6498 5.8999 18.8998C6.1499 19.1498 6.44157 19.2748 6.7749 19.2748C7.10824 19.2748 7.3999 19.1498 7.6499 18.8998L14.9999 11.5498L22.3499 18.8998C22.5832 19.1331 22.8706 19.2498 23.2119 19.2498C23.5539 19.2498 23.8499 19.1248 24.0999 18.8748C24.3499 18.6248 24.4749 18.3331 24.4749 17.9998C24.4749 17.6665 24.3499 17.3748 24.0999 17.1248Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronUp = memo(ForwardRef);
