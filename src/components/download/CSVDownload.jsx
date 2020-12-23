import React from 'react'
import { downloadCSV } from '../../utils/utils'

const CSVDownload = () => {
  const onClick = () => {
    const text =
      '동해물과, 백두산이, 마르고, 닳도록, 하느님이, 보우하사, 우리, 나라만세\n' +
      '동해물과, 백두산이, 마르고, 닳도록, 하느님이, 보우하사, 우리, 나라만세\n' +
      '동해물과, 백두산이, 마르고, 닳도록, 하느님이, 보우하사, 우리, 나라만세'
    downloadCSV(text, 'test')
  }

  return (
    <>
      <div>Test</div>
      <button onClick={onClick}>파일 다운로드</button>
    </>
  )
}

export default CSVDownload
