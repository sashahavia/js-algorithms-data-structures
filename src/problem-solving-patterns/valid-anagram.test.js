import { expect } from 'expect';
import { it } from 'jest-circus';
import { describe } from 'yargs';
import { validAnagram } from './valid-anagram';

test('should return true when both strings are empty', () => {
  expect(validAnagram('', '')).toBeTruthy();
});

test('should return false when strings are "aaz", "zza"', () => {
  expect(validAnagram('aaz', 'zza')).toBeFalsy();
});
