import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Buttons';

function App() {
  const [color, setColor] = useState('blue');

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 bg-white text-black px-4 py-4 inset-x-0'>
          <Button setColor={setColor} color='black' />
          <Button setColor={setColor} color='purple' />
          <Button setColor={setColor} color='red' />
          <Button setColor={setColor} color='white' />
          <Button setColor={setColor} color='green' />
          </div>
      </div>
    </>
  )
}

export default App
