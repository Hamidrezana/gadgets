export const isProduction = process.env.NEXT_PUBLIC_MAIN_ENV === 'PROD';
export const isDemo = process.env.NEXT_PUBLIC_NODE_ENV === 'demo';
export const isDevelopment = process.env.NEXT_PUBLIC_NODE_ENV === 'DEV';

export const isDev = () => {
  return process.env.NODE_ENV === 'development';
};

export const isProd = () => {
  return process.env.NODE_ENV === 'production';
};

export const isServer = () => {
  return typeof window === 'undefined';
};

export const isClient = () => {
  return typeof window !== 'undefined';
};
