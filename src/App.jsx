import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Button, Nav, NavDropdown } from 'react-bootstrap'
import AdMainWrapper from './components/advertise/AdMainWrapper'
import BoardWrapper from './components/board/BoardWrapper'
import DownloadWrapper from './components/download/DownloadWrapper'
import DragListWrapper from './components/drag/DragListWarpper'
import ListItemControlWrapper from './components/control/ListItemControlWrapper'
import ScrollWrapper from './components/scroll/ScrollWrapper'
import VideoWrapper from './components/video/VideoWrapper'

function App() {
  return (
    <>
      <Button href="/">홈</Button>
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
          <NavDropdown.Item href="/control">
            리스트아이템컨트롤
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="nav-dropdown-scroll" title="스크롤">
          <NavDropdown.Item href="/scroll">스크롤</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="nav-dropdown-video" title="비디오">
          <NavDropdown.Item href="/video">비디오</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Route path="/advertise" component={AdMainWrapper} />
      <Route path="/board" component={BoardWrapper} />
      <Route path="/download" component={DownloadWrapper} />
      <Route path="/drag" component={DragListWrapper} />
      <Route path="/control" component={ListItemControlWrapper} />
      <Route path="/scroll" component={ScrollWrapper} />
      <Route path="/video" component={VideoWrapper} />
    </>
  )
}

export default App
