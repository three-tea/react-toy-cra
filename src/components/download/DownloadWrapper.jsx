import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import React from 'react'
import CSVDownload from './CSVDownload'
import CSVDownload2 from './CSVDownload2'

const DownloadWrapper = () => {
  return (
    <div>
      <DropdownButton title="다운로드">
        <Dropdown.Item href="/download/main">메인다운로드</Dropdown.Item>
        <Dropdown.Item href="/download/sub">서브다운로드</Dropdown.Item>
      </DropdownButton>
      <Route path="/download/main" component={CSVDownload} />
      <Route path="/download/sub" component={CSVDownload2} />
    </div>
  )
}

export default DownloadWrapper
