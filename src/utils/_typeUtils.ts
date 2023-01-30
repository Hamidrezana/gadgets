export const isString = (type: unknown) => {
  return typeof type === 'string';
};

export const isNull = (type: unknown) => {
  return type === null;
};

export const isObject = (value: unknown) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

export const isFile = (value: unknown) => {
  return value instanceof File;
};

export const isArray = (value: unknown) => {
  return Array.isArray(value);
};
