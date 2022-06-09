import {flatten} from './flatten';

describe('flatten', () => {
  it('should return flattened array [1, 2, 3, 4, 5] when [1, 2, 3, [4, 5]] is passed', () => {
    expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return flattened array [1, 2, 3, 4, 5] when [1, [2, [3, 4], [[5]]]] is passed', () => {
    expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return flattened array [1, 2, 3] when [[1], [2], [3]] is passed', () => {
    expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
  });

  it('should return flattened array [1, 2, 3] when [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] is passed', () => {
    expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
  });
});
