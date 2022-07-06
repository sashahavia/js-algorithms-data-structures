import { isPalindrome } from './is-palindrome';

describe('isPalindrome', () => {
  it('should return false for string awesome', () => {
    expect(isPalindrome('awesome')).toBeFalsy();
  });

  it('should return false for string foobar', () => {
    expect(isPalindrome('foobar')).toBeFalsy();
  });

  it('should return true for string tacocat', () => {
    expect(isPalindrome('tacocat')).toBeTruthy();
  });

  it('should return true for string amanaplanacanalpanama', () => {
    expect(isPalindrome('amanaplanacanalpanama')).toBeTruthy();
  });

  it('should return false for string amanaplanacanalpandemonium', () => {
    expect(isPalindrome('amanaplanacanalpandemonium')).toBeFalsy();
  });
});
