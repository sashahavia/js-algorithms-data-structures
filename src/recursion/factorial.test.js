import {factorial} from './factorial';

describe('factorial', () => {
  it('should return 1 for 1!', () => {
    expect(factorial(1)).toEqual(1);
  });

  it('should return 2 for 2!', () => {
    expect(factorial(2)).toEqual(2);
  });

  it('should return 24 for 4!', () => {
    expect(factorial(4)).toEqual(24);
  });

  it('should return 5040 for 7!', () => {
    expect(factorial(7)).toEqual(5040);
  });
});
