import {bubbleSort} from './bubble_sort';

describe('bubbleSort', () => {
  const array = [3, 1, 89, 45, 23, 34, 78, 90, 9, 2, 5, 4];

  it('should sort array', () => {
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5, 9, 23, 34, 45, 78, 89, 90]);
  });

  it('should handle empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });
});
