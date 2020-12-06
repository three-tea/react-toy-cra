import React, { useCallback, useRef, useState } from 'react'
import useVideoPlayer from '../../hook/useVideoPlayer'
import { ProgressBar } from 'react-bootstrap'
import useFileUpload from '../../hook/useFileUpload'

const VideoPlayer = () => {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)

  const {
    videoCallback: { onPlay },
    isPlay,
    onPlaying,
    onEnded,
    getRemainTime,
  } = useVideoPlayer({ videoRef })

  const { onFile, progressPercent, videoUrl } = useFileUpload()

  const handleMuted = useCallback(() => {
    setIsMuted(!isMuted)
  }, [isMuted])

  return (
    <>
      <header>
        <h3>VideoPlayer</h3>
      </header>
      <div style={{ position: 'relative', width: 500, height: 500 }}>
        <video
          autoPlay
          ref={videoRef}
          poster="logo192.png"
          src={videoUrl}
          onPlaying={onPlaying}
          onEnded={onEnded}
          muted={isMuted}
          style={{ backgroundColor: 'black' }}
          width="500">
          브라우저가 비디오를 지원하지 않습니다
        </video>
        <div style={{ position: 'absolute', width: 500, bottom: 10, left: 10 }}>
          <button onClick={onPlay}>{isPlay ? 'Pause' : 'Play'}</button>
          <span style={{ color: 'white', padding: 10 }}>
            <span style={{ backgroundColor: 'black' }}>{getRemainTime()}</span>
          </span>
          <button onClick={handleMuted}>
            {isMuted ? 'sound Off' : 'sound On'}
          </button>
        </div>
      </div>
      <div>
        <input type="file" onChange={onFile} />
        <ProgressBar
          animated={progressPercent !== 100}
          now={progressPercent}
          label={`${progressPercent}%`}
        />
      </div>
    </>
  )
}

export default VideoPlayer
