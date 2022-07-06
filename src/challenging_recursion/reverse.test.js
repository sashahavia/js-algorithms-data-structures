import {reverse} from './reverse';

describe('reverse', () => {
  it('should return emosewa for string awesome', () => {
    expect(reverse('awesome')).toEqual('emosewa');
  });

  it('should return loohcsmhtir for string rithmschool', () => {
    expect(reverse('rithmschool')).toEqual('loohcsmhtir');
  });
});
