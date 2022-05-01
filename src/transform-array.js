const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  } else {
    let myArr = arr.slice();
    const dscrdNext = '--discard-next';
    const dscrdPrev = '--discard-prev';
    const dblNext = '--double-next';
    const dblPrev = '--double-prev';
    console.log(myArr);

    for (let elem of myArr) {
      let n;
      switch (elem) {
        case dscrdNext:
        n = myArr.indexOf(dscrdNext);
        if (n !== -1) {
          myArr[n+1] = null;
          myArr.splice(n,1);
        }
        console.log(myArr);

        case dscrdPrev:
        n = myArr.indexOf(dscrdPrev);
        if (n !== -1) {
          myArr.splice(n,1)
          if (n !== 0) {
            myArr[n-1] = null;
          }
        }
        console.log(myArr);

        case dblNext:
        n = myArr.indexOf(dblNext);
        if (n !== -1) {
          if (typeof(myArr[n+1]) === "undefined") {
            myArr.splice(n,1)
          } else {
            myArr[n] = myArr[n+1];
          }
        }
        console.log(myArr);

        case dblPrev:
        n = myArr.indexOf(dblPrev);
        if (n !== -1) {
          if (n == 0) {
            myArr.splice(n,1)
          } else {
            myArr[n] = myArr[n-1];
          }
        }
        console.log(myArr);
      }
    }
  let myArrFinal = myArr.filter(el => el !== null);
  return myArrFinal;
  }
}

module.exports = {
  transform
};
