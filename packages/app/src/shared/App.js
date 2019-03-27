import React, { useState, useEffect } from 'react'

const App = () => {
  const [message, setMessage] = useState('SSR successful.')

  useEffect(() => {
    setMessage('App successfully hydrated.')
  }, [])

  return (
    <div>
      <h1>SSR React App</h1>
      <div>{message}</div>
    </div>
  )
}

export default App
