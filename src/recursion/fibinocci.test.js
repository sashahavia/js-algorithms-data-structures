import {fib} from './fibinocci';

describe('fib', () => {
  it('should return 3 for fib(4)', () => {
    expect(fib(4)).toEqual(3);
  });

  it('should return 55 for fib(10)', () => {
    expect(fib(10)).toEqual(55);
  });

  it('should return 317811 for fib(28)', () => {
    expect(fib(28)).toEqual(317811);
  });

  it('should return 9227465 for fib(35)', () => {
    expect(fib(35)).toEqual(9227465);
  });
});
