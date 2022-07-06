import {someRecursive} from './some_recursive';

describe('someRecursive', () => {
  const isOdd = val => val % 2 !== 0;

  it('should return true for array [1, 2, 3, 4] and callback isOdd', () => {
    expect(someRecursive([1, 2, 3, 4], isOdd)).toBeTruthy();
  });

  it('should return true for array [4, 6, 8, 9] and callback isOdd', () => {
    expect(someRecursive([4, 6, 8, 9], isOdd)).toBeTruthy();
  });

  it('should return false for array [4, 6, 8] and callback isOdd', () => {
    expect(someRecursive([4, 6, 8], isOdd)).toBeFalsy();
  });

  it('should return false for array [4, 6, 8] and callback greater than 10', () => {
    expect(someRecursive([4, 6, 8], val => val > 10)).toBeFalsy();
  });
});
