/**
 * Write a function called sameFrequency. Given two positive integers,
 * find out if the two numbers have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 *
 * Time: O(n)
 *
 */

export const sameFrequency = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }

  const frequencyCounter = {};

  for (let i = 0; i < num1.length; i++) {
    let number = num1[i];
    frequencyCounter[number]
      ? (frequencyCounter[number] += 1)
      : (frequencyCounter[number] = 1);
  }

  for (let i = 0; i < num2.length; i++) {
    let number = num2[i];

    if (!frequencyCounter[number]) {
      return false;
    } else {
      frequencyCounter[number] -= 1;
    }
  }

  return true;
};
