export const isEmailValid = (val: string): string | boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(val) || 'errorMessages.email';
};

export const isLinkValid = (val: string): string | boolean => {
  const re =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  return re.test(val) || 'errorMessages.link';
};

export const isConfirmPasswordValid = (val: string, pass?: string) => {
  if (!pass) return true;
  return val === pass || 'errorMessages.confirmPassword';
};
