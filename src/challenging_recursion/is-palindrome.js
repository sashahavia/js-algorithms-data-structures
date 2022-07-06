/**
 * 
 * Write a recursive function called isPalindrome which returns true if
 * the string passed to it is a palindrome (reads the same froward and
 * backward). Otherwise it returns false
 * 
 */

export const isPalindrome = (str) => {
  const len = str.length;

  if (len <= 1) return true;

  if (str[0] !== str[len-1]) return false;

  return isPalindrome(str.slice(1, -1));
};
