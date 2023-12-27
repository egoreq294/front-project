import { buildSelector } from '@shared/lib/store';
import { JsonSettings } from '../types/jsonSettings';

const defaultSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
  (store) => store.user?.authData?.jsonSettings || defaultSettings,
);

export const [useJsonSettingByKey, getJsonSettingByKey] = buildSelector(
  (store, key: keyof JsonSettings) =>
    store.user?.authData?.jsonSettings?.[key] || null,
);
