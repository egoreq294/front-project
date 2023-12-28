import { ReactElement } from 'react';

import { FeatureFlags } from '@shared/types/featureFlags';
import { getFeatureFlag } from '../features';

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps): ReactElement => {
  const { on, off, feature } = props;

  if (getFeatureFlag(feature)) {
    return on;
  }

  return off;
};
