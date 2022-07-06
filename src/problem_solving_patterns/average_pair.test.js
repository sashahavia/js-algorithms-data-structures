import {averagePair} from './average_pair';

describe('averagePair', () => {
  it('should return true when the values are passed [1, 2, 3], 2.5', () => {
    expect(averagePair([1, 2, 3], 2.5)).toBeTruthy();
  });

  it('should return true when the values are passed [1, 3, 3, 5, 6, 7, 10, 12, 19], 8', () => {
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
  });

  it('should return false when the values are passed [-1, 0, 3, 4, 5, 6], 4.1', () => {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy();
  });

  it('should return false when the values are passed [], 4', () => {
    expect(averagePair([], 4)).toBeFalsy();
  });
});
