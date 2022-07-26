import {get} from './get';

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: [1, 2, 3]
      }
    }
  };

  it('should return [1, 2, 3] when key is "a.b.c"', () => {
    expect(get(obj, 'a.b.c', 0)).toEqual([1, 2, 3]);
  });

  it('should return [1, 2, 3] when key is "a.b.c.0"', () => {
    expect(get(obj, 'a.b.c.0', 0)).toEqual(1);
  });

  it('should return "bfe" when key is "a.c"', () => {
    expect(get(obj, 'a.c', 'bfe')).toEqual('bfe');
  });

  const obj2 = {
    c: [
      {
        python: {
          java: 3
        }
      }
    ]
  };

  it('should return 3 when key is "c[0].python.java"', () => {
    expect(get(obj2, 'c[0].python.java', 0)).toEqual(3);
  });

  it('should return "defaultValue" when key is "x"', () => {
    expect(get({}, 'x', 'defaultValue')).toEqual('defaultValue');
  });

  it('should return "defaultValue" when key is "x.x"', () => {
    expect(get({}, 'x.x', 'defaultValue')).toEqual('defaultValue');
  });

  it('should return "defaultValue" when key is "x.x"', () => {
    expect(get({x: {}}, 'x.x', 'defaultValue')).toEqual('defaultValue');
  });

  it('should return "defaultValue" when key is "x.x"', () => {
    expect(get(null, 'x.x', 'defaultValue')).toEqual('defaultValue');
  });
});