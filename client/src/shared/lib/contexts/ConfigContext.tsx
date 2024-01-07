import { createContext } from 'react';

import { Config } from '@shared/types/config';
import { INITIAL_CONFIG } from '../constants/config';

export const ConfigContext = createContext<Config>(INITIAL_CONFIG);
