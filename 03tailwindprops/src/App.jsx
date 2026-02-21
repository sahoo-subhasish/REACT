import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <Card name="Amitabh Bachan" age = {23} /> 
      <Card name="Shah Rukh Khan" age = {25} /> 
      <Card name="Salman Khan" /> 
    </>
  )
}

export default App
