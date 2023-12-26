import { FeatureFlags } from '@shared/types/featureFlags';

let featureFlags: FeatureFlags;

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags): void => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

export const getFeatureFlag = (flag: keyof FeatureFlags): boolean => {
  return !!featureFlags[flag];
};
