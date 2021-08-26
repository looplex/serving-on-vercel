import { useState, useEffect, useCallback } from 'react'

function Clock (props) {
  const [date, setDate] = useState(new Date())
  const tick = useCallback(function tick () {
    setDate(new Date())
  }, [])
  useEffect(() => {
    const timerId = setInterval(tick, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])
  return <time dateTime={date.toISOString()}>{date.toLocaleString()}</time>
}

export default Clock
