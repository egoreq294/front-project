import axios, { AxiosResponse } from 'axios';
import React, { FC, ReactNode, useEffect, useState } from 'react';

import { INITIAL_CONFIG } from '@shared/lib/constants/config';
import { ConfigContext } from '@shared/lib/contexts/ConfigContext';
import { Config } from '@shared/types/config';

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
  const [appConfig, setAppConfig] = useState<Config>(INITIAL_CONFIG);

  useEffect(() => {
    axios
      .get(`/environment.json?t=${Date.now()}`)
      .then(({ data: remoteConfig }: AxiosResponse<Config>) => {
        setAppConfig(remoteConfig);
      });
  }, []);

  return (
    <ConfigContext.Provider value={appConfig}>
      {children}
    </ConfigContext.Provider>
  );
};
