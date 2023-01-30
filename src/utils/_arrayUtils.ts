interface ArrayToMapOptions {
  lowerCaseKey?: boolean;
}

export const arrayToMap = <T, E>(
  arr: Array<T>,
  key: keyof T,
  callback?: (e: T) => E,
  options?: ArrayToMapOptions
): Record<string | number, E> => {
  if (!arr) return {};
  return arr.reduce((acc, cur) => {
    let keyText = cur[key] as unknown as string;
    if (options?.lowerCaseKey) keyText = keyText.toLowerCase();
    acc[keyText] = callback ? callback(cur) : (cur as unknown as E);
    return acc;
  }, {} as Record<string, E>);
};

export const removeOrAddToArr = <T>(
  arr: Array<T>,
  item: T,
  equalsCheck?: (a: T, b: T) => boolean
) => {
  const tempArr = [...arr];
  const itemIdx = arr.findIndex((el) =>
    equalsCheck ? equalsCheck(el, item) : el === item
  );
  if (itemIdx === -1) {
    tempArr.push(item);
  } else {
    tempArr.splice(itemIdx, 1);
  }
  return tempArr;
};
