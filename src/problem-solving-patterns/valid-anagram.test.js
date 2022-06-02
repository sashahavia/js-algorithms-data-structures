import {validAnagram} from './valid-anagram';

describe('validAnagram', () => {
  it('should return true when both strings are empty', () => {
    expect(validAnagram('', '')).toBeTruthy();
  });

  it('should return false when strings are "aaz", "zza"', () => {
    expect(validAnagram('aaz', 'zza')).toBeFalsy();
  });

  it('should return true when strings are "anagram", "nagaram"', () => {
    expect(validAnagram('anagram', 'nagaram')).toBeTruthy();
  });

  it('should return false when strings are "rat, "car"', () => {
    expect(validAnagram('rat', 'car')).toBeFalsy();
  });

  it('should return false when strings are "awesome", "awesom"', () => {
    expect(validAnagram('awesome', 'awesom')).toBeFalsy();
  });

  it('should return true when strings are "qwerty", "qeywrt"', () => {
    expect(validAnagram('qwerty', 'qeywrt')).toBeTruthy();
  });

  it('should return true when strings are "texttwisttime", "timetwisttext"', () => {
    expect(validAnagram('texttwisttime', 'timetwisttext')).toBeTruthy();
  });
});
