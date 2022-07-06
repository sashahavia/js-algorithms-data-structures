import {areThereDuplicates, areThereDuplicatesV2} from './are-there-duplicates';

describe('Are there duplicates', () => {
  describe('areThereDuplicates', () => {
    it('should return false when arguments are 1, 2, 3', () => {
      expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
    });
  
    it('should return true when arguments are 1, 2, 2', () => {
      expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
    });
  
    it('should return true when arguments are a, b, c, a', () => {
      expect(areThereDuplicates('a', 'b', 'c', 'a')).toBeTruthy();
    });
  });

  describe('areThereDuplicatesV2', () => {
    it('should return false when arguments are 1, 2, 3', () => {
      expect(areThereDuplicatesV2(1, 2, 3)).toBeFalsy();
    });
  
    it('should return true when arguments are 1, 2, 2', () => {
      expect(areThereDuplicatesV2(1, 2, 2)).toBeTruthy();
    });
  
    it('should return true when arguments are a, b, c, a', () => {
      expect(areThereDuplicatesV2('a', 'b', 'c', 'a')).toBeTruthy();
    });
  });
});
