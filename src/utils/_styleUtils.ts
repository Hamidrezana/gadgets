import { AnyType } from '../types';

export const styleChecker = (condition: boolean, style: AnyType): AnyType => {
  return condition ? style : undefined;
};

export const removeClassNamesPrefix = (className: string) => {
  return className.replace('Mui', '');
};

export const convertHexToRgba = (color: string, opacity: number) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return opacity
    ? `rgba(${r}, ${g}, ${b}, ${opacity})`
    : `rgb(${r}, ${g}, ${b})`;
};

export const pxCreator = (val: number) => {
  return `${val}px`;
};
