import { fromJS } from 'immutable';

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

export const responseData = fromJS({
  contents: [
    {
      id: 1010,
      name: '테스트 1010',
    },
    {
      id: 1009,
      name: '테스트 1009',
    },
    {
      id: 1008,
      name: '테스트 1008',
    },
    {
      id: 1007,
      name: '테스트 1007',
    },
    {
      id: 1006,
      name: '테스트 1006',
    },
    {
      id: 1005,
      name: '테스트 1005',
    },
    {
      id: 1004,
      name: '테스트 1004',
    },
    {
      id: 1003,
      name: '테스트 1003',
    },
    {
      id: 1002,
      name: '테스트 1002',
    },
    {
      id: 1001,
      name: '테스트 1001',
    },
  ],
});