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
      d="M17.1248 24.1004L8.6998 15.7004C8.5998 15.6004 8.52914 15.4921 8.4878 15.3754C8.4458 15.2587 8.4248 15.1337 8.4248 15.0004C8.4248 14.8671 8.4458 14.7421 8.4878 14.6254C8.52914 14.5087 8.5998 14.4004 8.6998 14.3004L17.1248 5.87539C17.3581 5.64206 17.6498 5.52539 17.9998 5.52539C18.3498 5.52539 18.6498 5.65039 18.8998 5.90039C19.1498 6.15039 19.2748 6.44206 19.2748 6.77539C19.2748 7.10872 19.1498 7.40039 18.8998 7.65039L11.5498 15.0004L18.8998 22.3504C19.1331 22.5837 19.2498 22.8711 19.2498 23.2124C19.2498 23.5544 19.1248 23.8504 18.8748 24.1004C18.6248 24.3504 18.3331 24.4754 17.9998 24.4754C17.6665 24.4754 17.3748 24.3504 17.1248 24.1004Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronLeft = memo(ForwardRef);
