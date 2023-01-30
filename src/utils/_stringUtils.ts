export const upperCaseFirstLetter = (val?: string): string => {
  if (!val) return '';
  return val.charAt(0).toUpperCase() + val.slice(1);
};

export const removeComma = (value: string): string => {
  return value.replace(/,/g, '');
};

export const fitString = (val: string, step = 4): string => {
  return `${val?.slice(0, step)}...${val?.slice(-step)}`;
};

const removeZero = (floatingDigitArrayReversed: Array<string>) => {
  for (let index = 0; index < floatingDigitArrayReversed.length; index += 1) {
    if (floatingDigitArrayReversed[index] !== '0') {
      break;
    } else {
      floatingDigitArrayReversed.splice(index, 1);
      index -= 1;
    }
  }
  return floatingDigitArrayReversed.reverse().join('');
};

export const priceStringFormatter = (price: string) => {
  if (!price.includes('.')) {
    return price;
  }
  if (price.split('.')[1].length > 5) {
    const mainPrice = price.split('.')[0];
    const floating = price.split('.')[1];
    const floatingDigitArrayReversed = floating.slice(0, 5).split('').reverse();
    const afterRemoveZero = removeZero(floatingDigitArrayReversed);
    if (afterRemoveZero) {
      return `${mainPrice}.${afterRemoveZero}`;
    }
    return mainPrice;
  }
  if (price.split('.')[1].length <= 5) {
    const floating = price.split('.')[1];
    const mainPrice = price.split('.')[0];
    const floatingDigitArrayReversed = floating.split('').reverse();
    const afterRemoveZero = removeZero(floatingDigitArrayReversed);
    if (afterRemoveZero) {
      return `${mainPrice}.${afterRemoveZero}`;
    }
    return mainPrice;
  }
  return '';
};

export const addSlashAtEnd = (str: string) => {
  if (str.endsWith('/')) {
    return str;
  }
  return `${str}/`;
};

export const humanReadableNumber = (num: number): string => {
  const PREFIXES: Record<string, string> = {
    '24': 'Y',
    '21': 'Z',
    '18': 'E',
    '15': 'P',
    '12': 'T',
    '9': 'G',
    '6': 'M',
    '3': 'k',
    '0': '',
    '-3': 'm',
    '-6': 'µ',
    '-9': 'n',
    '-12': 'p',
    '-15': 'f',
    '-18': 'a',
    '-21': 'z',
    '-24': 'y',
  };
  function getExponent(n: number) {
    if (n === 0) {
      return 0;
    }
    return Math.floor(Math.log10(Math.abs(n)));
  }

  function precise(n: number) {
    return Number.parseFloat(n.toPrecision(3));
  }
  const n = precise(Number.parseFloat(num.toString()));
  const e = Math.max(Math.min(3 * Math.floor(getExponent(n) / 3), 24), -24);
  return precise(n / 10 ** e).toString() + PREFIXES[e];
};
