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
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M18.8889 20H1.11111C0.816426 20 0.533811 19.8946 0.325437 19.7071C0.117063 19.5196 0 19.2652 0 19V1C0 0.734784 0.117063 0.48043 0.325437 0.292893C0.533811 0.105357 0.816426 0 1.11111 0H18.8889C19.1836 0 19.4662 0.105357 19.6746 0.292893C19.8829 0.48043 20 0.734784 20 1V19C20 19.2652 19.8829 19.5196 19.6746 19.7071C19.4662 19.8946 19.1836 20 18.8889 20ZM17.7778 18V2H2.22222V18H17.7778ZM4.44444 4H8.88889V8H4.44444V4ZM4.44444 10H15.5556V12H4.44444V10ZM4.44444 14H15.5556V16H4.44444V14ZM11.1111 5H15.5556V7H11.1111V5Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Article = memo(ForwardRef);
