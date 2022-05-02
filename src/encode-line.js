const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  console.log(str);
  let encoded = "";
  let arr = str.split('');
  let n = 1;
  while (arr.length > 0) {
    console.log(arr);
    let cur = arr.shift();
    if (cur === arr[0]) {
      n++;
    } else {
      n == 1 ? encoded += cur : encoded += n + cur;
      n = 1;
    }
  }
    return encoded;
}


module.exports = {
  encodeLine
};
