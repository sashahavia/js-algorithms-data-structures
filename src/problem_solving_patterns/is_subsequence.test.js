import {isSubsequence} from './is_subsequence';

describe('isSubsequence', () => {
  it('should return true for isSubsequence("hello", "hello world")', () => {
    expect(isSubsequence('hello', 'hello world')).toBeTruthy();
  });

  it('should return true for isSubsequence("sing", "sting")', () => {
    expect(isSubsequence('sing', 'sting')).toBeTruthy();
  });

  it('should return true for isSubsequence("abc", "abracadabra")', () => {
    expect(isSubsequence('ab', 'abracadabra')).toBeTruthy();
  });

  it('should return false for isSubsequence("abc", "acb")', () => {
    expect(isSubsequence('abc', 'acb')).toBeFalsy();
  });
});
