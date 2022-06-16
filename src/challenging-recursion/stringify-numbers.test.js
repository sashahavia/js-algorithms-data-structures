import {stringifyNumbers} from './stringify-numbers';

describe('stringifyNumbers', () => {
  const objectInput = {
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66
      }
    }
  };

  const objectOutput = {
    num: '1',
    test: [],
    data: {
      val: '4',
      info: {
        isRight: true,
        random: '66'
      }
    }
  };

  it('should return objectOutput when objectInput is passed', () => {
    expect(stringifyNumbers(objectInput)).toEqual(objectOutput);
  });

  it('should not modify original object', () => {
    stringifyNumbers(objectInput);
    expect(objectInput).not.toEqual(objectOutput);
  });
});
