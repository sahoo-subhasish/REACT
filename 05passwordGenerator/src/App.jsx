import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [charValue, setCharValue] = useState(false);
  const [numValue, setNumValue] = useState(false);
  const [password, setPassword] = useState("")

  const passRef = useRef(null);

  const paswordGenerator = useCallback(() => {
    let pass = "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(charValue) str += "!@#$%^&*-_+=[]{}~`";
    if(numValue) str += "0123456789";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charValue, numValue]);

  useEffect(()=>{
    paswordGenerator();
  }, [length, charValue, numValue, paswordGenerator])

  const passCopy = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, 
  [password]);


  return (
    <>
      <div className='w-full h-screen bg-black flex justify-center items-center'>
        <div className='w-full flex flex-col max-w-md p-4 bg-indigo-400 gap-y-4 rounded-xl'>
          <div className='w-full flex'>
            <input type="text" className='p-2 outline-none rounded-bl-md rounded-tl-md w-full'
              readOnly
              value={password}
              ref = {passRef}
            />
            <button className='text-white outline-none border-none bg-orange-500 rounded-br-md rounded-tr-md p-2'
            onClick={passCopy}
            >Copy</button>
          </div>
          <div className='flex gap-x-2'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="Length">Length : {length}</label>
            <div><input type="checkbox" 
              value={numValue}
              onChange = {(prev) => {setNumValue((prev) => !(prev))}}
            
            /><label htmlFor="numValue">numValue</label></div>
            <div><input type="checkbox" 
            value={charValue}
              onChange = {(prev) => {setCharValue((prev) => !(prev))}}
            
            /><label htmlFor="charValue">charValue</label></div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
