import CryptoJS from 'crypto-js';

export const generateSimpleUUID = () => {
  return (new Date().getTime() + Math.random()).toString();
};

const SIMPLE_KEY_UTF = CryptoJS.enc.Hex.parse(
  process.env.NEXT_PUBLIC_CRYPTO_SIMPLE_KEY_UTF ||
    '36ebe205bbdfc399a25h7923k4550fa8'
);
const IV = CryptoJS.enc.Hex.parse(
  process.env.NEXT_PUBLIC_CRYPTO_IV || 'be410fbb41df7162a679874gc131cf2c'
);

export const simpleAESDecrypt = (text: string) => {
  return CryptoJS.AES.decrypt(text, SIMPLE_KEY_UTF, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
};

export const simpleAESEncrypt = (text: string) => {
  return CryptoJS.AES.encrypt(text, SIMPLE_KEY_UTF, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
};
