/**
 * 
 * QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and
 * partitions the given array around the picked pivot. There are many different
 * versions of quickSort that pick pivot in different ways. 
 *      - Always pick the first element as a pivot.
 *      - Always pick the last element as a pivot (implemented below)
 *      - Pick a random element as a pivot.
 *      - Pick median as the pivot.
 * 
 * The key process in quickSort is a partition(). The target of partitions is, given
 * an array and an element x of an array as the pivot, put x at its correct position
 * in a sorted array and put all smaller elements (smaller than x) before x, and put
 * all greater elements (greater than x) after x. All this should be done in linear time.
 * 
 * Time Complexity
 * 
 * Best - O (n log n)
 * Average - O(n log n)
 * Worst - O(n^2)
 * 
 * Space Complexity
 * O (log n)
 */

export const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}