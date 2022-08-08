import {removeDuplicates} from './remove_duplicates';

describe('removeElement', () => {
  it('should return 2 when nums is [1,1,2]', () => {
    expect(removeDuplicates([1,1,2])).toEqual(2);
  });

  it('should return 5 when nums is [0,0,1,1,1,2,2,3,3,4]', () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
  });
});
