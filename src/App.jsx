import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import AdMainWrapper from './components/advertise/AdMainWrapper'
import BoardWrapper from './components/board/BoardWrapper'
import DownloadWrapper from './components/download/DownloadWrapper'
import DragListWrapper from './components/drag/DragListWarpper'
import ListItemControlWrapper from './components/control/ListItemControlWrapper'
import ScrollWrapper from './components/scroll/ScrollWrapper'
import VideoWrapper from './components/video/VideoWrapper'
import GNB from './components/navigation/GNB'
import Home from './components/Home'

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Button href="/">홈</Button>
        <GNB />
      </div>
      <hr />
      <Route exact={true} path="/" component={Home} />
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
