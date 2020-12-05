import { useCallback, useEffect, useState } from 'react'

const useFileUpload = () => {
  const [progressPercent, setProgressPercent] = useState(0)
  const [videoUrl, setVideoUrl] = useState('')

  const onFile = useCallback(e => {
    const { files } = e.target
    if (files.length) {
      const url = URL.createObjectURL(files[0])
      setVideoUrl(url)
    }
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (videoUrl && progressPercent >= 0 && progressPercent <= 100)
        setProgressPercent(prevState => prevState + 10)
    }, 100)
    return () => {
      clearInterval(progressInterval)
    }
  }, [progressPercent, videoUrl])

  return {
    onFile,
    progressPercent,
    videoUrl,
  }
}

export default useFileUpload
