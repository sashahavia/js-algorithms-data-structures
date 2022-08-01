/**
 * 
 * The Merge Sort algorithm is a sorting algorithm that is considered an example of
 * the divide and conquer strategy. So, in this algorithm, the array is initially divided
 * into two equal halves and then they are combined in a sorted manner. We can think of
 * it as a recursive algorithm that continuously splits the array in half until it cannot
 * be further divided. This means that if the array becomes empty or has only one element
 * left, the dividing will stop, i.e. it is the base case to stop the recursion. If the array
 * has multiple elements, we split the array into halves and recursively invoke the merge sort
 * on each of the halves. Finally, when both the halves are sorted, the merge operation is
 * applied. Merge operation is the process of taking two smaller sorted arrays and combining
 * them to eventually make a larger one.
 * 
 * Big O
 * 
 * O (n log n) - Best, Average, Worst
 * 
 * Space Complexity - O (n)
 */

export const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}
