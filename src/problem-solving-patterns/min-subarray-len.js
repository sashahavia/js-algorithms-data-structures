/**
 * Write a function called minSubArrayLen which accepts two parameters - an 
 * array of positive integers and a positive integer. This function should
 * return theminimal length of a contiguous subarray of which the sum is greater
 * than or equal to the integer passed to the function. If there isn't one,
 * return 0 instead.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 */

export function minSubArrayLen(nums, sum) { 
  let total = 0; 
  let start = 0; 
  let end = 0; 
  let minLen = Infinity; 
  while (start < nums.length) { 
    // if current window doesn't add up to the given sum then  
    // move the window to right 
    if(total < sum && end < nums.length) { 
      total += nums[end]; 
      end++; 
    } 
    // if current window adds up to at least the sum given then 
    // we can shrink the window  
    else if(total >= sum) { 
      minLen = Math.min(minLen, end-start); 
      total -= nums[start]; 
      start++; 
    }  
    // current total less than required total but we reach the end, need this or else we'll be  in an infinite loop  
    else { 
      break; 
    } 
  } 

  return minLen === Infinity ? 0 : minLen;
}
 