import {productOfArray} from './product-of-array';

describe('productOfArray', () => {
  it('should return 6 for array [1, 2, 3]', () => {
    expect(productOfArray([1, 2, 3])).toEqual(6);
  });

  it('should return 60 for array [1, 2, 3, 10]', () => {
    expect(productOfArray([1, 2, 3, 10])).toEqual(60);
  });
});
