import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'
import VideoPlayer2 from './VideoPlayer2'

const VideoWrapper = () => {
  return (
    <div>
      <DropdownButton title="비디오">
        <Dropdown.Item href="/video/main">메인비디오</Dropdown.Item>
        <Dropdown.Item href="/video/sub">서브비디오</Dropdown.Item>
      </DropdownButton>
      <Route path="/video/main" component={VideoPlayer} />
      <Route path="/video/sub" component={VideoPlayer2} />
    </div>
  )
}

export default VideoWrapper
