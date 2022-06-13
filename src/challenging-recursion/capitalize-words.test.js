import {capitalizeWords} from './capitalize-words';

describe('capitalizeWords', () => {
  it("should return ['I', 'AM', 'LEARNING', 'RECURSION'] for array ['i', 'am', 'learning', 'recursion']", () => {
    expect(capitalizeWords(['i', 'am', 'learning', 'recursion'])).toEqual(['I', 'AM', 'LEARNING', 'RECURSION']);
  });

  it("should return [] for array []", () => {
    expect(capitalizeWords([])).toEqual([]);
  });
});