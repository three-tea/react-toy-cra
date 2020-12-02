import React, { useRef } from 'react'
import './App.css'
import Test2 from './components/RayTest/Test2'
import Test from './components/RayTest/Test'

function App() {
  const ref = useRef()
  console.log('App > ref:', ref)

  return <Test testRef={ref} />
}

export default App
