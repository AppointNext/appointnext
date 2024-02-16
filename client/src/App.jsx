import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DrSignup from './components/DrSignup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DrSignup/>
    </>
  )
}

export default App
