/**
 * Write a recursive function called reverse which accepts
 * a string and returns a new string in reverse.
 * 
 */

export const reverse = (str) => {
  if (str.length <= 1) {
    return str;
  }

  return reverse(str.slice(1)) + str[0];
};
