import { useCallback, useEffect, useState } from 'react'

const useVideoPlayer = ({ videoRef }) => {
  const [isPlay, setIsPlay] = useState(false)
  const [isMute, setIsMute] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const onPlay = useCallback(() => {
    setIsPlay(!isPlay)
  }, [isPlay])

  const onMute = useCallback(() => {
    setIsMute(!isMute)
  }, [isMute])

  const getRemainTimeSeparatedString = second => {
    let ss = parseInt(second, 10)
    let mm = parseInt(ss / 60, 10)
    ss = ss > 60 ? ss - mm * 60 : ss
    ss = ss < 10 ? '0' + ss : ss
    return mm + ':' + ss
  }

  const getRemainTime = useCallback(() => {
    const duration = videoRef?.current?.duration
    if (!duration) {
      return '0:00'
    }
    const seconds = duration - currentTime
    return getRemainTimeSeparatedString(seconds)
  }, [currentTime, videoRef])

  useEffect(() => {
    if (isPlay) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isPlay, videoRef])

  useEffect(() => {
    videoRef.current.muted = isMute
  }, [isMute, videoRef])

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(videoRef?.current?.currentTime)
    }, 100)
    return () => {
      clearInterval(timeInterval)
    }
  }, [videoRef])

  const videoCallback = {
    onPlay,
    onMute,
  }

  return {
    videoCallback,
    isPlay,
    isMute,
    getRemainTime,
  }
}

export default useVideoPlayer
