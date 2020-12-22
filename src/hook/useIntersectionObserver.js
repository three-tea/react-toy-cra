import { useEffect, useState } from 'react'

const useIntersectionObserver = ({ callback, options }) => {
  const [targetRef, setTargetRef] = useState(null)

  useEffect(() => {
    const intersectionCallback = ([entry], observer) => {
      if (entry.isIntersecting) {
        callback(entry, observer)
      }
    }
    const options = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(intersectionCallback, options)
    if (targetRef) {
      observer.observe(targetRef)
    }

    return () => {
      observer.disconnect()
    }
  }, [callback, targetRef])

  return [targetRef, setTargetRef]
}

export default useIntersectionObserver
