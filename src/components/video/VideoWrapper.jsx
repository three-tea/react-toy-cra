import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'
import VideoPlayer2 from './VideoPlayer2'

const VideoWrapper = () => {
  return (
    <div>
      <DropdownButton title="비디오메인">
        <Dropdown.Item href="/video1/video1">비디오1</Dropdown.Item>
        <Dropdown.Item href="/video1/video2">비디오2</Dropdown.Item>
      </DropdownButton>
      <Route path="/video1/video1" component={VideoPlayer} />
      <Route path="/video1/video2" component={VideoPlayer2} />
    </div>
  )
}

export default VideoWrapper
