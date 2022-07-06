/**
 * Write a function called averagePair. Given a sorted array of integers
 * and a target average, determine if there is a pair of values in the array where
 * the average of the pair equals the target average. There may be more than one
 * pair that matches the average target.
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 */

export function averagePair(array, average){ 
  let left = 0;
  let right = array.length - 1;
  while (left < right) { 
    let tempAverage = (array[left] + array[right]) / 2; 
    if (average === tempAverage) { 
      return true; 
    } else if (tempAverage < average) {
      left++; 
    } else { 
      right--; 
    } 
  } 
  return false;
} 
 