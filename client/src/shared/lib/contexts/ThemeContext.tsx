import { createContext, Dispatch, SetStateAction } from 'react';

import { Theme } from '../constants/theme';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
