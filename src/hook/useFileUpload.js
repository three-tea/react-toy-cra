import { useCallback, useEffect, useState } from 'react'

const useFileUpload = () => {
  const [progressPercent, setProgressPercent] = useState(0)
  const [videoUrl, setVideoUrl] = useState('')
  const [file, setFile] = useState(null)

  const onChangeFile = useCallback(e => {
    const [video] = e.target.files
    setProgressPercent(0)
    setVideoUrl('')
    setFile(video)
  }, [])

  useEffect(() => {
    let id
    if (file !== null) {
      if (progressPercent < 100) {
        id = window.setInterval(
          () => setProgressPercent(prev => prev + 10),
          200
        )
      } else {
        setVideoUrl(URL.createObjectURL(file))
        setFile(null)
        setProgressPercent(0)
      }
    }

    return () => {
      if (id !== undefined) {
        window.clearInterval(id)
      }
    }
  }, [file, progressPercent])

  return {
    onChangeFile,
    progressPercent,
    videoUrl,
  }
}

export default useFileUpload
