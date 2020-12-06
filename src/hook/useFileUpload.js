import { useCallback, useEffect, useState } from 'react'

const useFileUpload = () => {
  const [progressPercent, setProgressPercent] = useState(0)
  const [videoUrl, setVideoUrl] = useState('')
  const [files, setFiles] = useState([])

  const onFile = useCallback(e => {
    const { files } = e.target
    if (files.length) {
      setProgressPercent(0)
      setVideoUrl('')
      setFiles(files)
    }
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (files.length && progressPercent >= 0 && progressPercent < 100)
        setProgressPercent(prevState => prevState + 10)
    }, 100)
    if (files.length && progressPercent === 100) {
      setVideoUrl(URL.createObjectURL(files[0]))
    }
    return () => {
      clearInterval(progressInterval)
    }
  }, [files, progressPercent])

  return {
    onFile,
    progressPercent,
    videoUrl,
  }
}

export default useFileUpload
