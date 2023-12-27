import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { useJsonSettings } from '@entities/User';
import { Theme } from '@shared/lib/constants/theme';
import { ThemeContext } from '@shared/lib/contexts/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const [isThemeInited, setIsThemeInited] = useState(false);

  useEffect(() => {
    if (isThemeInited) {
      return;
    }

    setTheme(defaultTheme);
    setIsThemeInited(true);
  }, [defaultTheme, isThemeInited]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
