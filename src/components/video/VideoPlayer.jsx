import React, { useRef } from 'react'
import useVideoPlayer from '../../hook/useVideoPlayer'

const VideoPlayer = () => {
  const videoRef = useRef(null)

  const {
    videoCallback: { onPlay, onMute },
    isPlay,
    isMute,
    getRemainTime,
  } = useVideoPlayer({ videoRef })

  return (
    <>
      <header>
        <h3>VideoPlayer</h3>
      </header>
      <div style={{ position: 'relative', width: 500 }}>
        <video
          ref={videoRef}
          poster="logo192.png"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          style={{ backgroundColor: 'black' }}
          width="500">
          <source src="video-forest.mp4" type="video/mp4" />
          브라우저가 비디오를 지원하지 않습니다
        </video>
        <div style={{ position: 'absolute', width: 500, bottom: 10, left: 10 }}>
          <button onClick={onPlay}>{isPlay ? 'Pause' : 'Play'}</button>
          <span style={{ color: 'white', padding: 10 }}>{getRemainTime()}</span>
          <button onClick={onMute}>{isMute ? 'sound Off' : 'sound On'}</button>
        </div>
      </div>
    </>
  )
}

export default VideoPlayer
