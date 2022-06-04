import {maxSubarraySum} from './max-subarray-sum';

describe('maxSubarraySum', () => {
  it('should return 700 for the following array [100, 200, 300, 400] and length of 2', () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
  });

  it('should return 39 for the following array [1, 4, 2, 10, 23, 3, 1, 0, 20] and length of 4', () => {
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
  });

  it('should return 5 for the following array [-3, 4, 0, -2, 6, -1] and length of 2', () => {
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
  });

  it('should return 5 for the following array [3, -2, 7, -4, 1, -1, 4, -2, 1] and length of 2', () => {
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
  });

  it('should return null for the following array [12, 3] and length of 3', () => {
    expect(maxSubarraySum([12, 3], 3)).toBeNull();
  });
});
