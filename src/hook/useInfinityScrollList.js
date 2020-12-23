import { useEffect } from 'react'

const useInfinityScrollList = ({ targetRef, callback, options }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [callback, options, targetRef])

  return {}
}

export default useInfinityScrollList
