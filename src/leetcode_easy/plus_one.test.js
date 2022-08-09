import {plusOne, plusOneVer2} from './plus_one';

describe('two options for plusOne', () => {
  describe('plusOne', () => {
    it('should return [1,2,4] when digits is [1,2,3]', () => {
      expect(plusOne([1,2,3])).toEqual([1,2,4]);
    });
  
    it('should return [4,3,2,2] when digits is [4,3,2,1]', () => {
      expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
    });
  
    it('should return [1,0] when digits is [9]', () => {
      expect(plusOne([9])).toEqual([1,0]);
    });
  
    it('should return [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4] when digits is [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]', () => {
      expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
    });
  
    it('should return [2, 0, 0] when digits is [1,9,9]', () => {
      expect(plusOne([1,9, 9])).toEqual([2,0, 0]);
    });
  });

  describe('plusOneVer2', () => {
    it('should return [1,2,4] when digits is [1,2,3]', () => {
      expect(plusOneVer2([1,2,3])).toEqual([1,2,4]);
    });
  
    it('should return [4,3,2,2] when digits is [4,3,2,1]', () => {
      expect(plusOneVer2([4,3,2,1])).toEqual([4,3,2,2]);
    });
  
    it('should return [1,0] when digits is [9]', () => {
      expect(plusOneVer2([9])).toEqual([1,0]);
    });
  
    it('should return [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4] when digits is [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]', () => {
      expect(plusOneVer2([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
    });
  
    it('should return [2, 0, 0] when digits is [1,9,9]', () => {
      expect(plusOneVer2([1,9, 9])).toEqual([2,0, 0]);
    });
  });
});
