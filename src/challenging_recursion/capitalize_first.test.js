import {capitalizeFirst} from './capitalize_first';

describe('capitalizeFirst', () => {
  it("should return ['Car', 'Taco', 'Banana'] for array ['car', 'taco', 'banana']", () => {
    expect(capitalizeFirst(['car', 'taco', 'banana'])).toEqual(['Car', 'Taco', 'Banana']);
  });

  it("should return ['Car'] for array ['car']", () => {
    expect(capitalizeFirst(['car'])).toEqual(['Car']);
  });

  it("should return [] for array []", () => {
    expect(capitalizeFirst([])).toEqual([]);
  });
});
