type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods,
  additionals: string[]
): string => {
  return [
    cls,
    ...additionals,
    Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([className]) => className),
  ].join(" ");
};
