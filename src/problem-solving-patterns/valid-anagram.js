/**
 * Given two strings, wrtite a function to determine if the seod string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
 * Note: You may asume the string contains only lowercase alphabets
 *
 * Time Complexity: O(n)
 *
 * @param {*} str1
 * @param {*} str2
 */

export function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
  }
  for (let key in frequencyCounter1) {
    if (!frequencyCounter2[key]) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}
