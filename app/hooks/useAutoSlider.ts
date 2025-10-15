import { useState, useEffect } from 'react'

export function useAutoSlider(itemsLength: number, duration: number = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemsLength)
    }, duration)
    return () => clearInterval(interval)
  }, [itemsLength, duration])

  return { currentIndex, setCurrentIndex }
}
