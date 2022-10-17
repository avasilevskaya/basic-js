const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {

    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error ("Incorrect arguments!")
    }

    if (!this.direct) message = message.split('').reverse().join('');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let cipher = "";

    for(let i = 0, k = 0; i < message.length; i++){
      let letter = message[i];
      let code = letter.charCodeAt();
  
      if (code >= 65 && code <= 90) {
        let codeNew = ((code - 65) + (key[k % key.length].charCodeAt() - 65)) % 26;
        cipher += String.fromCharCode(codeNew + 65);
        k++;
      } else {
        cipher += letter;
      }
    }

    return cipher;
  }

  decrypt(message, key) {

    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error ("Incorrect arguments!")
    }

    if (!this.direct) message = message.split('').reverse().join('');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let cipher = "";

    for(let i = 0, k = 0; i < message.length; i++){
      let letter = message[i];
      let code = letter.charCodeAt();
  
      if (code >= 65 && code <= 90) {
        let codeNew = 65 + code - key[k % key.length].charCodeAt();
        if (codeNew < 65) {
          codeNew += 26;
        } else if (codeNew > 90) {
          codeNew -= 26;
        };
        cipher += String.fromCharCode(codeNew);
        k++;
      } else {
        cipher += letter;
      }
    }

    return cipher;
  }
}




module.exports = {
  VigenereCipheringMachine
};