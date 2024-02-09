import { useMediaQuery as useMediaQueryImpl } from 'react-responsive';

type UseMediaQueryResult = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

export const useMediaQuery = (): UseMediaQueryResult => {
  const isDesktop = useMediaQueryImpl({
    query: '(min-width: 1280px)',
  });

  const isTablet = useMediaQueryImpl({
    query: '(max-width: 1280px)',
  });

  const isMobile = useMediaQueryImpl({
    query: '(max-width: 768px)',
  });

  return { isDesktop, isTablet, isMobile };
};
