import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCounter] = useState(0);
  const addValue = () => {
    setCounter(count + 1);
  }

  const decValue = () => {
    setCounter(count - 1);
  }

  return (
    <>
      <h1>MKB AAAAG</h1>
      <h1>MKB Counter : {count}</h1>
      <p>amitabh sir ki MKB : {count}</p>
      <button onClick = {addValue}>MKB++</button>
      <br />
      <button onClick = {decValue}>MKB--</button>
    </>
  )
}

export default App
