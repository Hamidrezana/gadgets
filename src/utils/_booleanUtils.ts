export const convertBooleanToNumber = (val?: boolean) => {
  if (val === undefined) return undefined;
  return val ? 1 : 0;
};
