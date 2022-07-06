/**
 * 
 * Write a function called stringifyNumbers which takes in an object and finds all of the values
 * which are numbers and converts them to strings.
 * Should not modify original object.
 * Recursion would be a great way to solve it!
 */

export const stringifyNumbers = (obj) => {
  const newObj = {};
  
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};
