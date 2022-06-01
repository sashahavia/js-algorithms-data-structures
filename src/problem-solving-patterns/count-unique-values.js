/**
 * Implement a function called countUniqueValues, which accpets a sorted array,
 * and counts the unique vales in the array.
 * There can be negative numbers in the array, but it will always be sorted
 *
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */

export function countUniqueValues(arr) {
  let left = 0;
  let next = left + 1;
  let uniqueCount = 0;
  while (left < arr.length) {
    if (arr[left] !== arr[next]) {
      uniqueCount++;
    }
    left++;
    next++;
  }
  return uniqueCount;
}
