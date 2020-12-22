import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Nav, NavDropdown } from 'react-bootstrap'
import AdMainWrapper from './components/advertise/AdMainWrapper'
import AdMainWrapper2 from './components/advertise/AdMainWrapper2'
import BoardWrapper from './components/board/BoardWrapper'
import BoardWrapper2 from './components/board/BoardWrapper2'
import DownloadWrapper from './components/download/DownloadWrapper'
import DownloadWrapper2 from './components/download/DownloadWrapper2'
import DragListWrapper from './components/drag/DragListWarpper'
import DragListWrapper2 from './components/drag/DragListWarpper2'
import ListItemControlWrapper from './components/list-item-control/ListItemControlWrapper'
import ListItemControlWrapper2 from './components/list-item-control/ListItemControlWrapper2'
import ScrollWrapper from './components/scroll/ScrollWrapper'
import ScrollWrapper2 from './components/scroll/ScrollWrapper2'
import VideoWrapper from './components/video/VideoWrapper'
import VideoWrapper2 from './components/video/VideoWrapper2'

function App() {
  return (
    <>
      <Nav>
        <NavDropdown id="nav-dropdown-advertise" title="메인광고">
          <NavDropdown.Item href="/advertise1">메인광고1</NavDropdown.Item>
          <NavDropdown.Item href="/advertise2">메인광고2</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="nav-dropdown-board" title="보드">
          <NavDropdown.Item href="/board1">보드1</NavDropdown.Item>
          <NavDropdown.Item href="/board2">보드2</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="nav-dropdown-download" title="다운로드">
          <NavDropdown.Item href="/download1">다운로드1</NavDropdown.Item>
          <NavDropdown.Item href="/download2">다운로드2</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="nav-dropdown-drag" title="드래그">
          <NavDropdown.Item href="/drag1">드래그1</NavDropdown.Item>
          <NavDropdown.Item href="/drag2">드래그2</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-list-item-control"
          title="리스트아이템컨트롤">
          <NavDropdown.Item href="/list-item-control1">
            리스트아이템컨트롤1
          </NavDropdown.Item>
          <NavDropdown.Item href="/list-item-control2">
            리스트아이템컨트롤2
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="nav-dropdown-scroll" title="스크롤">
          <NavDropdown.Item href="/scroll1">스크롤1</NavDropdown.Item>
          <NavDropdown.Item href="/scroll2">스크롤2</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="nav-dropdown-video" title="비디오">
          <NavDropdown.Item href="/video1">비디오1</NavDropdown.Item>
          <NavDropdown.Item href="/video2">비디오2</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Route path="/advertise1" component={AdMainWrapper} />
      <Route path="/advertise2" component={AdMainWrapper2} />
      <Route path="/board1" component={BoardWrapper} />
      <Route path="/board2" component={BoardWrapper2} />
      <Route path="/download1" component={DownloadWrapper} />
      <Route path="/download2" component={DownloadWrapper2} />
      <Route path="/drag1" component={DragListWrapper} />
      <Route path="/drag2" component={DragListWrapper2} />
      <Route path="/list-item-control1" component={ListItemControlWrapper} />
      <Route path="/list-item-control2" component={ListItemControlWrapper2} />
      <Route path="/scroll1" component={ScrollWrapper} />
      <Route path="/scroll2" component={ScrollWrapper2} />
      <Route path="/video1" component={VideoWrapper} />
      <Route path="/video2" component={VideoWrapper2} />
    </>
  )
}

export default App
