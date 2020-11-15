export function keyMirror(obj, extraKey) {
  let ret = {};
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object');
  }
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = extraKey ? `${extraKey}_${key}` : key;
    }
  }
  return ret;
}