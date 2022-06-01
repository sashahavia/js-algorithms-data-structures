import { countUniqueValues } from './count-unique-values';

describe('countUniqueValues', () => {
  it('should return 2 for array [1, 1, 1, 1, 1, 2]', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2);
  });

  it('should return 7 for array [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13', () => {
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
  });

  it('should return 0 for array []', () => {
    expect(countUniqueValues([])).toEqual(0);
  });

  it('should return 4 for array [-2,-1,-1,0,1]', () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toEqual(4);
  });
});
