/**
 * Given an array of integers and number, write a function called maxSubarraySum,
 * which finds the maximum sum of a subarray with the length of the number 
 * passed to the function.
 * 
 * Note that subarray must consist of consecutive elements from the original array.
 *  
 * Time complexity: O(n)
 * Space complexity: O(1)
 * 
 */

export const maxSubarraySum = (arr, num) => { 
  let maxSum = 0; 
  let tempSum = 0; 
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]; 
  } 
  tempSum = maxSum;
  
  for (let i = num; i < arr.length; i++) { 
    tempSum = tempSum - arr[i - num] + arr[i]; 
    maxSum = Math.max(maxSum, tempSum); 
  } 
  return maxSum;
};
  