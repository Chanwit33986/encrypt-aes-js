import CryptoJS from "crypto-js";

export function encryptAES(secretKey: string, data: any) {
  const key = CryptoJS.SHA256(secretKey).toString()?.substring(0, 32);
  var iv = CryptoJS.lib.WordArray.random(16);
  let encryptionIV = CryptoJS.SHA256(iv).toString()?.substring(0, 16);
  var encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    CryptoJS.enc.Utf8.parse(key),
    {
      iv: CryptoJS.enc.Utf8.parse(encryptionIV),
    }
  );
  return {
    iv: encryptionIV,
    data: encrypted.toString(),
  };
}
