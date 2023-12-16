import {SHA256} from 'crypto-js'
// @ts-ignore
export const encrypt = (data:string): string =>{  //funcion para encriptar
  // Utiliza SHA256
  const encrypted = SHA256(data).toString();

  return encrypted;
};

