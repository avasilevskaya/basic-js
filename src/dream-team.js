const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    let stringsOnly = members.filter(pal => typeof(pal) === "string");
    let namesOnly = stringsOnly.filter(pal => pal != " ");
    let handleWhitespaces = namesOnly.map(pal => pal.trim());
    let firstLetters = handleWhitespaces.map(pal => pal.charAt(0));
    let capitalised = firstLetters.map(pal => pal.toUpperCase());
    let sorted = capitalised.sort();
    let team = sorted.join('');
    return team
  }
}

module.exports = {
  createDreamTeam
};
