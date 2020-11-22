import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (onCallback, options) => {
  const [targetRef, setTargetRef] = useState(null)

  const callback = ([entry], observer) => {
    if (entry.isIntersecting) {
      onCallback(entry, observer)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { ...options })

    if (targetRef) {
      observer.observe(targetRef)
    }

    return () => observer.disconnect()
  }, [targetRef])

  return [targetRef, setTargetRef]
}