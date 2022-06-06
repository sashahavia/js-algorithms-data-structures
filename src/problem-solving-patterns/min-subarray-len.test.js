import {minSubArrayLen} from './min-subarray-len';

describe('minSubArrayLen', () => {
  it('should return 2 for the array [2, 3, 1, 2, 4, 3] and number 7', () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
  });

  it('should return 2 for the array [2, 1, 6, 5, 4] and number 9', () => {
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toEqual(2);
  });

  it('should return 1 for the array [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19] and number 52', () => {
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(1);
  });

  it('should return 3 for the array [1, 4, 16, 22, 5, 7, 8, 9, 10] and number 39', () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toEqual(3);
  });

  it('should return 5 for the array [1, 4, 16, 22, 5, 7, 8, 9, 10] and number 55', () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5);
  });

  it('should return 2 for the array [4, 3, 3, 8, 1, 2, 3] and number 11', () => {
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toEqual(2);
  });

  it('should return 0 for the array [1, 4, 16, 22, 5, 7, 8, 9, 10] and number 95', () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0);
  });
});
