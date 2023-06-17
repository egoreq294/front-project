import { createContext, Dispatch, SetStateAction } from 'react';
import { Theme } from './types';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
