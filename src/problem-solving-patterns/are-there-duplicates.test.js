import {areThereDuplicates} from './are-there-duplicates';

describe('areThereDuplicates', () => {
  it('should return false when arguments are 1, 2, 3', () => {
    expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
  });

  it('should return true when arguments are 1, 2, 2', () => {
    expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
  });

  it('should return true when arguments are a, b, c, a', () => {
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBeTruthy();
  });
});
