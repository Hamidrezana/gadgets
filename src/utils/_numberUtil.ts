interface AddCommaArgs {
  postFixChar?: string;
  preFixChar?: string;
  precision?: number;
  floatZero?: boolean;
}

export const addComma = (
  val?: number | string,
  { postFixChar = '', preFixChar = '', precision, floatZero }: AddCommaArgs = {}
): string => {
  try {
    if (floatZero && Number(val) === 0) {
      return '0.0';
    }
    if (val === undefined) {
      return '-';
    }
    let value = val.toString();
    if (precision !== undefined) {
      value = parseFloat(value).toFixed(precision);
    }
    // if (!value && value !== '0') {
    //   return '';
    // }
    // if (value === '0') {
    //   return value;
    // }
    const floatNumber = value.split('.');
    value = floatNumber[0];
    value = value.replace(/,/g, '');
    const objRegex =
      /(-?[\u0660-\u0669s\u06F0-\u06F9s0-9]+)([\u0660-\u0669s\u06F0-\u06F9s0-9]{3})/;
    while (objRegex.test(value)) {
      value = value.replace(objRegex, '$1,$2');
    }
    const pointNumber = floatNumber[1];
    const returnVal = pointNumber ? [value, pointNumber].join('.') : value;
    return `${preFixChar}${returnVal}${postFixChar}`;
  } catch (err) {
    return '-';
  }
};

export const toFixed = (val: string | number, precision: number): number => {
  let value = val.toString();
  if (precision !== null && precision !== undefined) {
    value = parseFloat(value).toFixed(precision);
  }
  return Number(value);
};

export const normalize = (value: number, max: number) => {
  return (value * 100) / max;
};

export const convertDecimalToHex = (num: number) => {
  return `0x${num.toString(16)}`;
};

export const toEnNumber = (value: number | string): string => {
  const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
  const arabicNumbers = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠'];
  const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const str = value.toString();
  return str
    .split('')
    .map(
      (c) =>
        englishNumbers[persianNumbers.indexOf(c)] ||
        englishNumbers[arabicNumbers.indexOf(c)] ||
        c
    )
    .join('')
    .trim();
};
