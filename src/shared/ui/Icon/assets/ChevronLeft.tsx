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
      d="M7.22572 0.862914C6.8407 0.466965 6.20759 0.458106 5.81164 0.843129L0.793132 5.72314C0.576073 5.93421 0.475343 6.21983 0.49206 6.50006C0.475343 6.7803 0.576073 7.06592 0.793132 7.27699L5.81164 12.157C6.20759 12.542 6.8407 12.5332 7.22572 12.1372C7.61074 11.7413 7.60188 11.1082 7.20593 10.7231L2.863 6.50006L7.20593 2.27699C7.60188 1.89197 7.61074 1.25886 7.22572 0.862914Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronLeft = memo(ForwardRef);
