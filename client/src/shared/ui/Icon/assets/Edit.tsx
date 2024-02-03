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
      d="M8.6871 10.1283C8.30723 10.888 9.11321 11.694 9.87296 11.3141C9.95793 11.2717 10.0355 11.2158 10.1027 11.1486L18.1262 3.125C18.4714 2.77982 18.4714 2.22018 18.1263 1.875C17.7811 1.52982 17.2214 1.52982 16.8763 1.875L8.85267 9.89858C8.7855 9.96575 8.72959 10.0433 8.6871 10.1283ZM7.04451 15.8641C6.23918 16.0871 5.49825 15.6066 4.96661 14.9619C4.42491 14.3049 3.93343 13.5637 4.18123 12.7491L5.49506 8.4301C5.59738 8.09376 5.78654 7.79033 6.04348 7.5504L11.8383 2.13914C12.2103 1.79174 12.2484 1.21505 11.9252 0.821769C11.5635 0.38148 10.9009 0.34913 10.4979 0.752082L4.10655 7.14345C3.87251 7.37749 3.70021 7.66595 3.60511 7.98297L1.06729 16.4424C0.609609 17.968 2.03203 19.3904 3.55764 18.9327L12.017 16.3949C12.3341 16.2998 12.6225 16.1275 12.8565 15.8935L19.7411 9.00886C19.9069 8.84311 20 8.61832 20 8.38392C20 7.5965 19.048 7.20219 18.4912 7.75902L12.0405 14.2107C11.7963 14.455 11.493 14.6318 11.1601 14.724L7.04451 15.8641Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Edit = memo(ForwardRef);