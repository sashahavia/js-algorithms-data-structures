/**
 * 
 * Insertion sort is a simple sorting algorithm that works similar to the way you sort
 * playing cards in your hands. The array is virtually split into a sorted and an
 * unsorted part. Values from the unsorted part are picked and placed at
 * the correct position in the sorted part.
 * 
 * Big O Complexity
 * 
 * O(n^2) worst case
 */

export const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[i + 1] = currentVal;
  }
  return arr;
};
