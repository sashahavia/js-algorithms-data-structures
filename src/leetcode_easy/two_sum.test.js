import {twoSum} from './two_sum';

describe('twoSum', () => {
  it('should return [0, 1] for input array [2,7,11,15] and target 9', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0, 1]);
  });

  it('should return [1, 2] for input array [3,2,4] and target 6', () => {
    expect(twoSum([3,2,4], 6)).toEqual([1, 2]);
  });

  it('should return [0, 1] for input array [3, 3] and target 6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should return [0, 2] for input array [3, 2, 3] and target 6', () => {
    expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
  });

  it('should return [1, 2] for input array [2, 5, 5, 11] and target 10', () => {
    expect(twoSum([2, 5, 5, 11], 10)).toEqual([1, 2]);
  });
});
