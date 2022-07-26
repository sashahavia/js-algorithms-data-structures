/**
 * 
 * Lodash get function that supports both 
 * 
 * 'a.c.b' format and 'c[0].python.java
 */

export const get = (object, keys, defaultVaue) => {
  keys = Array.isArray(keys) ? keys : keys.replace(/(\[(\d)\])/g, '.$2').split('.');

  object = object && object[keys[0]];

  if (object && keys.length > 1) {
    return get(object, keys.slice(1), defaultVaue);
  }

  return object ? object : defaultVaue;
};
