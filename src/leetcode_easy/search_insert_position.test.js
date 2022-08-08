import {searchInsertPosition} from './search_insert_position';

describe('searchInsertPosition', () => {
  it('should return 2 when nums is [1,3,5,6] and target is 5', () => {
    expect(searchInsertPosition([1,3,5,6], 5)).toEqual(2);
  });

  it('should return 1 when nums is [1,3,5,6] and target is 2', () => {
    expect(searchInsertPosition([1,3,5,6], 2)).toEqual(1);
  });

  it('should return 4 when nums is [1,3,5,6] and target is 7', () => {
    expect(searchInsertPosition([1,3,5,6], 7)).toEqual(4);
  });
});
