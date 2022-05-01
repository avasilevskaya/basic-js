const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(strSampleActivity) {
  if (typeof(strSampleActivity) !== "string") {
    return false;
  }
  let sampleActivity = strSampleActivity * 1;
  if (sampleActivity + "" !== strSampleActivity) {
    return false;
  }

  const log2 = 693 / 1000;

  if (sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  }

  let countDecimals = function(value) {
    if (Math.floor(value) === value){
      return 1;
    }
    return value.toString().split(".")[1].length;
  }

  nDec = countDecimals(sampleActivity);
  
  activityLN = Math.log(( MODERN_ACTIVITY * nDec) / ( sampleActivity * nDec));

  nDecLN = countDecimals(activityLN);

  let res = Math.ceil((activityLN * nDecLN) * HALF_LIFE_PERIOD / (log2 * nDecLN));
  
  //let res = Math.ceil(Math.log(( sampleActivity * nDec) / (MODERN_ACTIVITY * nDec)) * HALF_LIFE_PERIOD / log2);
  return res;
}

module.exports = {
  dateSample
};
