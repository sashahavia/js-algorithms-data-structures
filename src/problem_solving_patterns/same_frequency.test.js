import {sameFrequency} from './same_frequency';

describe('sameFrequency', () => {
  it('should return true sameFrequency(182, 821)', () => {
    expect(sameFrequency(182, 821)).toBeTruthy();
  });

  it('should return false sameFrequency(34, 14)', () => {
    expect(sameFrequency(34, 14)).toBeFalsy();
  });

  it('should return true sameFrequency(3589578, 5879385)', () => {
    expect(sameFrequency(3589578, 5879385)).toBeTruthy();
  });

  it('should return false sameFrequency(22, 222)', () => {
    expect(sameFrequency(22, 222)).toBeFalsy();
  });
});
