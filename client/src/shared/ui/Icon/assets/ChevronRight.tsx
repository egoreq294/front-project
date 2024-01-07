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
      d="M12.8752 24.1004L21.3002 15.7004C21.4002 15.6004 21.4709 15.4921 21.5122 15.3754C21.5542 15.2587 21.5752 15.1337 21.5752 15.0004C21.5752 14.8671 21.5542 14.7421 21.5122 14.6254C21.4709 14.5087 21.4002 14.4004 21.3002 14.3004L12.8752 5.87539C12.6419 5.64206 12.3502 5.52539 12.0002 5.52539C11.6502 5.52539 11.3502 5.65039 11.1002 5.90039C10.8502 6.15039 10.7252 6.44206 10.7252 6.77539C10.7252 7.10872 10.8502 7.40039 11.1002 7.65039L18.4502 15.0004L11.1002 22.3504C10.8669 22.5837 10.7502 22.8711 10.7502 23.2124C10.7502 23.5544 10.8752 23.8504 11.1252 24.1004C11.3752 24.3504 11.6669 24.4754 12.0002 24.4754C12.3335 24.4754 12.6252 24.3504 12.8752 24.1004Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronRight = memo(ForwardRef);
