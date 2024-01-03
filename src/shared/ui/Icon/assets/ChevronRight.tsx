import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="8"
    height="13"
    viewBox="0 0 8 13"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M0.774281 0.862914C1.1593 0.466965 1.79241 0.458106 2.18836 0.843129L7.20687 5.72314C7.42393 5.93421 7.52466 6.21983 7.50794 6.50006C7.52466 6.7803 7.42393 7.06592 7.20687 7.27699L2.18836 12.157C1.79241 12.542 1.1593 12.5332 0.774282 12.1372C0.389259 11.7413 0.398118 11.1082 0.794067 10.7231L5.137 6.50006L0.794067 2.27699C0.398117 1.89197 0.389259 1.25886 0.774281 0.862914Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronRight = memo(ForwardRef);
