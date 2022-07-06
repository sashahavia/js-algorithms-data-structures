import {recursiveRange} from './recursive_range';

describe('recursiveRange', () => {
  it('should return 21 for number 6', () => {
    expect(recursiveRange(6)).toEqual(21);
  });

  it('should return 55 for number 10', () => {
    expect(recursiveRange(10)).toEqual(55);
  });
});
