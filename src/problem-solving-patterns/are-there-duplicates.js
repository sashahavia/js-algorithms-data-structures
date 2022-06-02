/**
 * Implement a function called, areThereDuplicates which accepts a
 * variable number of arguments, and checks whether there are any duplicates
 * among the arguments passed in. 
 * 
 */

export function areThereDuplicates(...args) {
  const lookup = {};

  for (let i = 0; i < args.length; i++) {
    if (lookup[args[i]]) {
      return true;
    }
    lookup[args[i]] = true;
  }

  return false;
}