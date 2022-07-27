/**
 * 
 * Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based
 * algorithm in which the list is divided into two parts, the sorted part at the left end and the
 * unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.
 * 
 * Big (O) Complexity
 * 
 * O(n^2)
 * 
 */

export const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};
