const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let strMain;
  let strAddRepeated;

  if (options.hasOwnProperty('addition')) {
    let strAdd = options.addition;
    let nRepAdd;
    if (options.hasOwnProperty('additionRepeatTimes')){
      nRepAdd = options.additionRepeatTimes;
    } else {
      nRepAdd = 1;
    }
    let strSepAdd;
    if (options.hasOwnProperty('additionSeparator')){
      strSepAdd = options.additionSeparator
    } else {
      strSepAdd = "|"
    }
    strAddRepeated = strAdd + (strSepAdd + strAdd).repeat(nRepAdd - 1)
  }

  if (typeof(strAddRepeated) !== "undefined") {
    strMain = str + strAddRepeated;
  } else {
    strMain = str;
  }

  let nRep;
  if (options.hasOwnProperty('repeatTimes')) {
    nRep = options.repeatTimes;
  } else {
    nRep = 1;
  }
  let strSep;
  if (options.hasOwnProperty('separator')) {
    strSep = options.separator;
  } else {
    strSep = "+";
  }

  strMain = strMain + (strSep + strMain).repeat(nRep - 1);
  return strMain
}

module.exports = {
  repeater
};
