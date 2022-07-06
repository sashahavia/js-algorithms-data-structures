/**
 * Implement a function called, areThereDuplicates which accepts a
 * variable number of arguments, and checks whether there are any duplicates
 * among the arguments passed in.
 * 
 * Time: O(n)
 * Space: O(n)
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

// A one line solution
export function areThereDuplicatesV2() {
  return new Set(arguments).size !== arguments.length;
}
