import {collectStrings} from './collect_strings';

describe('collectStrings', () => {
  const obj = {
    stuff: 'foo',
    data: {
      val: {
        thing: {
          info: 'bar',
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: 'baz'
            }
          }
        }
      }
    }
  };

  it('should return an array ["foo", "bar", "baz"] of all strings in obj', () => {
    const expectedResult = ['foo', 'bar', 'baz'];

    expect(collectStrings(obj)).toEqual(expectedResult);
  });

  it('should return empty array for empty obj', () => {
    expect(collectStrings({})).toEqual([]);
  });
});
