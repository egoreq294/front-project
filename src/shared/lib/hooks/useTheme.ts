import { useContext, useEffect } from 'react';

import { Theme } from '../constants/theme';
import { ThemeContext } from '../contexts/ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: (saveAction: (theme: Theme) => void) => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme || Theme.LIGHT;
  }, []);

  const toggleTheme = (saveAction: (theme: Theme) => void): void => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    document.body.className = newTheme;
    saveAction(newTheme);
    setTheme?.(newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
};
