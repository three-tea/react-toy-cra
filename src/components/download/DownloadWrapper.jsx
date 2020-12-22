import { Dropdown, DropdownButton } from "react-bootstrap";
import { Route } from "react-router-dom";
import React from "react";
import CSVDownload from "./CSVDownload";
import CSVDownload2 from "./CSVDownload2";

const DownloadWrapper = () => {
  return (
    <div>
      <DropdownButton title="다운로드메뉴">
        <Dropdown.Item href="/download1/download1">다운로드1</Dropdown.Item>
        <Dropdown.Item href="/download1/download2">다운로드2</Dropdown.Item>
      </DropdownButton>
      <Route path="/download1/download1" component={CSVDownload} />
      <Route path="/download1/download2" component={CSVDownload2} />
    </div>
  )
}

export default DownloadWrapper
