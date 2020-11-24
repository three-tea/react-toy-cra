import { fromJS } from 'immutable'

export function keyMirror(obj, extraKey) {
  let ret = {}
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object')
  }
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = extraKey ? `${extraKey}_${key}` : key
    }
  }
  return ret
}

export function downloadCSV(text, fileName) {
  console.log('downloadCSV')
  const blob = new Blob(['\uFEFF' + text], { // BOM(Byte Order Mark)는 유니코드 문자, 텍스트 시작 부분에 와야 함
    type: 'text/csv', // mime타입, 클라이언트에게 전송된 문서의 다양성을 알려주기 위한 메커니즘, type/subtype구조, 전통적으로 소문자로 쓰임
    // endings: 'transparent', // default, 개행문자 변경 없음
    endings: 'native', // native는 호스트 OS 파일 시스템 규칙과 일치하도록 개행문자를 변경
  })
  console.log('blob:', blob)
  const url = URL.createObjectURL(blob)
  console.log('url:', url)
  const link = document.createElement('a')
  link.href = url
  link.download = `${fileName}.csv`
  console.log('link:', link)
  link.click()
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
})
