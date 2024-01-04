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
      d="M4.75019 11.7248L13.1502 20.1498C13.2502 20.2498 13.3585 20.3205 13.4752 20.3618C13.5919 20.4038 13.7169 20.4248 13.8502 20.4248C13.9835 20.4248 14.1085 20.4038 14.2252 20.3618C14.3419 20.3205 14.4502 20.2498 14.5502 20.1498L22.9752 11.7248C23.2085 11.4915 23.3252 11.1998 23.3252 10.8498C23.3252 10.4998 23.2002 10.1998 22.9502 9.94981C22.7002 9.69981 22.4085 9.57481 22.0752 9.57481C21.7419 9.57481 21.4502 9.69981 21.2002 9.94981L13.8502 17.2998L6.50019 9.94981C6.26686 9.71647 5.97953 9.5998 5.6382 9.5998C5.2962 9.5998 5.00019 9.7248 4.75019 9.9748C4.50019 10.2248 4.37519 10.5165 4.37519 10.8498C4.37519 11.1831 4.50019 11.4748 4.75019 11.7248Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronDown = memo(ForwardRef);
