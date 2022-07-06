import {binarySearch} from './binary_search';

describe('binarySearch', () => {
  const array = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 98, 99];

  it('should return 1 for array [1, 2, 3, 4, 5] and value 2', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
  });

  it('should return 2 for array [1, 2, 3, 4, 5] and value 3', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  });

  it('should return 4 for array [1, 2, 3, 4, 5] and value 5', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  });

  it('should return -1 for array [1, 2, 3, 4, 5] and value 6', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });

  it(`should return 2 for array ${array} and value 10`, () => {
    expect(binarySearch(array, 10)).toEqual(2);
  });

  it(`should return 16 for array ${array} and value 95`, () => {
    expect(binarySearch(array, 95)).toEqual(16);
  });

  it(`should return -1 for array ${array} and value 100`, () => {
    expect(binarySearch(array, 100)).toEqual(-1);
  });
});
