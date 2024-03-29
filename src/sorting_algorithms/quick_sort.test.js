import {quickSort} from './quick_sort';

describe('quickSort', () => {
  const array = [3, 1, 89, 45, 23, 34, 78, -1, 90, 9, 2, 5, 4];

  it('should sort array', () => {
    expect(quickSort(array)).toEqual([-1, 1, 2, 3, 4, 5, 9, 23, 34, 45, 78, 89, 90]);
  });

  it('should handle empty array', () => {
    expect(quickSort([])).toEqual([]);
  });
});