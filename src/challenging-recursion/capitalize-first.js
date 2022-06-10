/**
 * 
 * Write a recursive function called capitalizeFirst. 
 * Given an array of strings, capitalize the first
 * letter of each string in the array.
 * 
 */

export const capitalizeFirst = (array) => {
  if (!array.length) {
    return [];
  }
  
  if (array.length === 1) {
    return [array[0].charAt(0).toUpperCase() + array[0].slice(1)];
  }

  let res = capitalizeFirst(array.slice(0, -1));
  const word = array.slice(array.length - 1)[0];
  res.push(word.charAt(0).toUpperCase() + word.slice(1));

  return res;
};
