/**
 * 
 * Write a function called productOfArray which takes in an array of numbers
 * and returns the product of them all.
 * 
 */

export const productOfArray = (array) => {
  if (array.length === 0) {
    return 1;
  }

  return array[0] * productOfArray(array.slice(1));
};
