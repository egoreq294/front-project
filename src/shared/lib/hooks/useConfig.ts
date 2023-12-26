import { useContext } from 'react';

import { Config } from '@shared/types/config';
import { ConfigContext } from '../contexts/ConfigContext';

export const useConfig = (): Config => useContext<Config>(ConfigContext);
