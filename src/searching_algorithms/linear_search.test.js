import {linearSearch} from './linear_search';

describe('linearSearch', () => {
  it('should return 1 for array [10, 15, 20, 25, 30] abd value 15', () => {
    expect(linearSearch([10, 15, 20, 25, 30], 15)).toEqual(1);
  });

  it('should return 5 for array [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] abd value 4', () => {
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toEqual(5);
  });

  it('should return 0 for array [100] abd value 100', () => {
    expect(linearSearch([100], 100)).toEqual(0);
  });

  it('should return -1 for array [1, 2, 3, 4, 5] abd value 6', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });

  it('should return -1 for array [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] abd value 10', () => {
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toEqual(-1);
  });

  it('should return -1 for array [100] abd value 200', () => {
    expect(linearSearch([100], 200)).toEqual(-1);
  });
});
