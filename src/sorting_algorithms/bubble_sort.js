/**
 * 
 * Write a function Bubble sort
 * 
 * Complexity:
 * O(n^2)
 * O(n) - best case for nearly sorted array
 */

export const bubbleSort = (arr) => {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }
  
  return arr;
};
