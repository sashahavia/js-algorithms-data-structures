/**
 * 
 * Write a recursive function called capitalizeWords. 
 * Given an array of words, return a new array conatining each word capitalized.
 * 
 */

 export const capitalizeWords = (array) => {
  if (!array.length) {
    return [];
  }
  
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  let res = capitalizeWords(array.slice(0, -1));
  const word = array.slice(array.length - 1)[0];
  res.push(word.toUpperCase());

  return res;
};