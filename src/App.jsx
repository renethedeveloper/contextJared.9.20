import { useState } from 'react'
import PrimaryProvider from './context/primaryContext'

import './App.css'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Context App</h1>
      <Home/>
        
    </>
  )
}

export default App
