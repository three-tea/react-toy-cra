import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'

const GNB = () => {
  return (
    <Nav>
      <NavDropdown id="nav-dropdown-advertise" title="광고">
        <NavDropdown.Item href="/advertise">광고</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown id="nav-dropdown-board" title="보드">
        <NavDropdown.Item href="/board">보드</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown id="nav-dropdown-download" title="다운로드">
        <NavDropdown.Item href="/download">다운로드</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown id="nav-dropdown-drag" title="드래그">
        <NavDropdown.Item href="/drag">드래그</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown id="nav-dropdown-control" title="리스트아이템컨트롤">
        <NavDropdown.Item href="/control">리스트아이템컨트롤</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown id="nav-dropdown-scroll" title="스크롤">
        <NavDropdown.Item href="/scroll">스크롤</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown id="nav-dropdown-video" title="비디오">
        <NavDropdown.Item href="/video">비디오</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}

export default GNB
