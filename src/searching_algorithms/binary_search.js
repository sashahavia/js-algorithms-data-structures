/**
 * Binary Search Exercise
 * 
 * Write a function called binarySearch which accepts a sorted array
 * and a value and returns the index at which the value exists.
 * Otherwise, return -1.
 * 
 */

export const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid -1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};
