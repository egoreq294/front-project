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
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M7.82369 17.9664V13.5316C7.82369 12.9793 8.27141 12.5316 8.82369 12.5316H11.1715C11.7238 12.5316 12.1715 12.9793 12.1715 13.5316V17.9664C12.1715 18.5642 12.6606 19.0533 13.2584 19.0533H16.5193C17.1171 19.0533 17.6062 18.5642 17.6062 17.9664V11.3577C17.6062 10.8054 18.0539 10.3577 18.6062 10.3577H19.454C19.954 10.3577 20.1932 9.73817 19.8127 9.41208L10.7258 1.22737C10.3128 0.857805 9.68237 0.857805 9.26933 1.22737L0.182446 9.41208C-0.187116 9.73817 0.0411431 10.3577 0.541139 10.3577H1.38895C1.94124 10.3577 2.38895 10.8054 2.38895 11.3577V17.9664C2.38895 18.5642 2.87808 19.0533 3.4759 19.0533H6.73674C7.33456 19.0533 7.82369 18.5642 7.82369 17.9664Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const HomeNew = memo(ForwardRef);
