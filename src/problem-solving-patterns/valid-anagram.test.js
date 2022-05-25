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

test('should return true when strings are "anagram", "nagaram"', () => {
  expect(validAnagram('anagram', 'nagaram')).toBeTruthy();
});

test('should return false when strings are "rat, "car"', () => {
  expect(validAnagram('rat', 'car')).toBeFalsy();
});

test('should return false when strings are "awesome", "awesom"', () => {
  expect(validAnagram('awesome', 'awesom')).toBeFalsy();
});

test('should return true when strings are "qwerty", "qeywrt"', () => {
  expect(validAnagram('qwerty', 'qeywrt')).toBeTruthy();
});

test('should return true when strings are "texttwisttime", "timetwisttext"', () => {
  expect(validAnagram('texttwisttime', 'timetwisttext')).toBeTruthy();
});
