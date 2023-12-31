import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    fill="currentColor"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 26 26"
    xmlSpace="preserve"
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M22.518,3.482L16.482,0H9.517L3.482,3.482L0,9.518v6.964l3.482,6.035L9.518,26h6.964l6.035-3.482L26,16.482V9.517
			L22.518,3.482z M25,16.215l-3.215,5.57L16.215,25h-6.43l-5.57-3.215L1,16.215v-6.43l3.215-5.57L9.785,1h6.43l5.57,3.215L25,9.785
			V16.215z"
        />
        <polygon points="4.688,5.395 2.123,9.84 11.55,12.257 		" />
        <polygon points="2,10.841 2,15.43 10.753,13.084 		" />
        <polygon points="9.604,2.259 5.396,4.688 12.033,11.326 		" />
        <polygon points="20.604,4.688 16.396,2.259 13.967,11.326 		" />
        <polygon points="15.43,2 10.571,2 13,11.066 		" />
        <polygon points="14.673,12.035 23.741,9.605 21.312,5.395 		" />
        <polygon points="21.312,20.605 23.732,16.412 14.839,14.132 		" />
        <polygon points="16.396,23.741 20.604,21.312 13.967,14.674 		" />
        <polygon points="2.259,16.395 4.688,20.605 11.327,13.965 		" />
        <polygon points="24,15.448 24,10.57 14.695,13.062 		" />
        <polygon points="10.571,24 15.43,24 13,14.934 		" />
        <polygon points="5.396,21.312 9.604,23.741 12.033,14.674 		" />
      </g>
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Orange = memo(ForwardRef);
