import { power } from './power';

describe('power', () => {
  it('should return 1 for power(2, 0)', () => {
    expect(power(2, 0)).toEqual(1);
  });

  it('should return 4 for power(2, 2)', () => {
    expect(power(2, 2)).toEqual(4);
  });

  it('should return 16 for power(2, 4)', () => {
    expect(power(2, 4)).toEqual(16);
  });
});
