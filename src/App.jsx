import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router } from 'react-router-dom'
import AppRouter from './config/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter />
          </>
  )
}

export default App
