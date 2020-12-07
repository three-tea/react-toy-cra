import React, { useMemo, useRef } from 'react'
import useVideoPlayer from '../../hook/useVideoPlayer'
import useFileUpload from '../../hook/useFileUpload'

const VideoPlayer = () => {
  const videoRef = useRef(null)

  const {
    videoCallback: { onPlay, onMuted },
    isPlay,
    isMuted,
    onPlaying,
    onEnded,
    getRemainTime,
  } = useVideoPlayer({ videoRef })

  const { onChangeFile, progressPercent, videoUrl } = useFileUpload()

  const isShowProgressBar = useMemo(
    () => progressPercent > 0 && progressPercent <= 100,
    [progressPercent]
  )

  return (
    <>
      <header>
        <h3>VideoPlayer</h3>
      </header>
      <div style={{ position: 'relative', width: 500, height: 500 }}>
        <video
          autoPlay={true}
          ref={videoRef}
          poster="logo192.png"
          src={videoUrl}
          onPlaying={onPlaying}
          onEnded={onEnded}
          style={{ backgroundColor: 'black' }}
          width="500">
          브라우저가 비디오를 지원하지 않습니다
        </video>
        <div style={{ position: 'absolute', width: 500, bottom: 10, left: 10 }}>
          <button onClick={onPlay}>{isPlay ? 'Pause' : 'Play'}</button>
          <span style={{ color: 'white', padding: 10 }}>
            <span style={{ backgroundColor: 'black' }}>{getRemainTime()}</span>
          </span>
          <button onClick={onMuted}>
            {isMuted ? 'sound Off' : 'sound On'}
          </button>
        </div>
      </div>
      <div>
        {!isShowProgressBar && (
          <input type="file" onChange={onChangeFile} accept="video/*" />
        )}
        {isShowProgressBar && (
          <div style={{ width: 500, backgroundColor: 'pink' }}>
            <div
              style={{
                height: 25,
                backgroundColor: 'blue',
                width: `${progressPercent}%`,
              }}>
              `${progressPercent}%`
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default VideoPlayer
