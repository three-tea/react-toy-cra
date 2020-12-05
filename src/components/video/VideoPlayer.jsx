import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const VideoPlayer = () => {
  const videoRef = useRef(null)
  const [paused, setPaused] = useState(true)
  const [muted, setMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const handlePlayPause = useCallback(() => {
    if (paused) {
      videoRef.current.play()
      setPaused(false)
    } else {
      videoRef.current.pause()
      setPaused(true)
    }
  }, [paused])

  const handleMute = useCallback(() => {
    if (muted) {
      videoRef.current.muted = false
      setMuted(false)
    } else {
      videoRef.current.muted = true
      setMuted(true)
    }
  }, [muted])

  const getRemainingTime = useCallback(() => {
    const duration = videoRef?.current?.duration
    if (!duration) {
      return '0:00'
    }
    const seconds = duration - currentTime
    const hour = Math.floor(seconds / (60 * 60))
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)
    if (hour) {
      return `${hour}:${min}:${String(sec).padStart(2, '0')}`
    } else {
      return `${min}:${String(sec).padStart(2, '0')}`
    }
  }, [currentTime])

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentTime = videoRef?.current?.currentTime
      setCurrentTime(currentTime)
    }, 100)
    return () => {
      clearInterval(timeInterval)
    }
  }, [paused])

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
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', width: 500, bottom: 10, left: 10 }}>
          <button onClick={handlePlayPause}>{paused ? 'Play' : 'Pause'}</button>
          <span style={{ color: 'white', padding: 10 }}>
            {getRemainingTime()}
          </span>
          <button onClick={handleMute}>{muted ? 'Mute' : 'Unmute'}</button>
        </div>
      </div>
    </>
  )
}

export default VideoPlayer
