import {findLongestSubstring} from './find-longest-substring';

describe('findLongestSubstring', () => {
  it('should return 0 when string is empty', () => {
    expect(findLongestSubstring('')).toEqual(0);
  });

  it('should return 7 when string is rithmschool', () => {
    expect(findLongestSubstring('rithmschool')).toEqual(7);
  });

  it('should return 6 when string is thisisawesome', () => {
    expect(findLongestSubstring('thisisawesome')).toEqual(6);
  });

  it('should return 7 when string is thecatinthehat', () => {
    expect(findLongestSubstring('thecatinthehat')).toEqual(7);
  });

  it('should return 1 when string is bbbbbb', () => {
    expect(findLongestSubstring('bbbbbb')).toEqual(1);
  });

  it('should return 8 when string is longestsubstring', () => {
    expect(findLongestSubstring('longestsubstring')).toEqual(8);
  });

  it('should return 6 when string is thisishowwedoit', () => {
    expect(findLongestSubstring('thisishowwedoit')).toEqual(6);
  });
});
