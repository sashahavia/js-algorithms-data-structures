import {removeElement} from './remove_element';

describe('removeElement', () => {
  it('should return 2 when nums is [3,2,2,3] and val is 3', () => {
    expect(removeElement([3,2,2,3], 3)).toEqual(2);
  });

  it('should return 5 when nums is [0,1,2,2,3,0,4,2] and val is 2', () => {
    expect(removeElement([0,1,2,2,3,0,4,2], 2)).toEqual(5);
  });
});
