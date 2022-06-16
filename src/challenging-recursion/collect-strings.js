/**
 * 
 * Write a recursive function called collectStrings which accepts an object
 * and returns an array of all the values in the object that have a typeof
 * string.
 * 
 */

export const collectStrings = (obj) => {
  let array = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      array.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      array = array.concat(collectStrings(obj[key]));
    }
  }

  return array;
};
