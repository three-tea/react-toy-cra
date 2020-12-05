import React, { useRef } from 'react'
import useVideoPlayer from '../../hook/useVideoPlayer'
import { ProgressBar } from 'react-bootstrap'
import useFileUpload from '../../hook/useFileUpload'

const VideoPlayer = () => {
  const videoRef = useRef(null)

  const {
    videoCallback: { onPlay, onMute },
    isPlay,
    isMute,
    getRemainTime,
  } = useVideoPlayer({ videoRef })

  const { onFile, progressPercent, videoUrl } = useFileUpload()

  return (
    <>
      <header>
        <h3>VideoPlayer</h3>
      </header>
      <div style={{ position: 'relative', width: 500 }}>
        <video
          autoPlay
          ref={videoRef}
          poster="logo192.png"
          src={progressPercent === 100 && videoUrl}
          style={{ backgroundColor: 'black' }}
          width="500">
          브라우저가 비디오를 지원하지 않습니다
        </video>
        <div style={{ position: 'absolute', width: 500, bottom: 10, left: 10 }}>
          <button onClick={onPlay}>{isPlay ? 'Pause' : 'Play'}</button>
          <span style={{ color: 'white', padding: 10 }}>{getRemainTime()}</span>
          <button onClick={onMute}>{isMute ? 'sound Off' : 'sound On'}</button>
        </div>
      </div>
      <div>
        <input type="file" onChange={onFile} />
        {videoUrl ? <ProgressBar now={progressPercent} /> : null}
      </div>
    </>
  )
}

export default VideoPlayer
