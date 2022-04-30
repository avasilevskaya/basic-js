const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(myDate) {
  let result;
  if (typeof(myDate) === 'undefined') {
    result = "Unable to determine the time of year!";
  } else if (myDate instanceof Date && Object.getOwnPropertyNames(myDate).length == 0) {
    let month = myDate.getMonth();
    switch (month) {
      case 2: case 3: case 4:
        result = "spring";
        break;
      case 5: case 6: case 7:
        result = "summer";
        break;
      case 8: case 9: case 10:
        result = "autumn";
        break;
      default:
        result = "winter";
    }
  } else {
    throw new Error ("Invalid date!");
  }
  return result;
}

module.exports = {
  getSeason
};
