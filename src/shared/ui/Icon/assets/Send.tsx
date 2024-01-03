import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="32"
    height="28"
    viewBox="0 0 32 28"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M2.57102 27.8471C1.95887 28.0958 1.37733 28.0411 0.826399 27.683C0.275466 27.325 0 26.8047 0 26.1222V19.1756C0 18.7404 0.12243 18.3519 0.367289 18.01C0.612147 17.6682 0.948828 17.4506 1.37733 17.3573L10.8455 14.9703C11.8529 14.7163 11.8528 13.2849 10.8455 13.031L1.37733 10.6439C0.948828 10.5506 0.612147 10.3331 0.367289 9.99118C0.12243 9.64929 0 9.26077 0 8.82564V1.87906C0 1.19528 0.275466 0.674368 0.826399 0.316316C1.37733 -0.0417356 1.95887 -0.0958171 2.57102 0.154073L30.8522 12.2756C31.6174 12.6175 32 13.1925 32 14.0006C32 14.8087 31.6174 15.3837 30.8522 15.7256L2.57102 27.8471Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Send = memo(ForwardRef);
