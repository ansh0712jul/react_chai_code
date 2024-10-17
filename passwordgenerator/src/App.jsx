import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let[length,SetLength]=useState(6);
  let[numallowed,SetAllowed]=useState(false);
  let[charallowed,SetCharAllowed]=useState(false);
  let[pass,SetPass]=useState("");

// here callback hook is used taaki ye purana data cache m store krke rkh le..(memoisation)
  const passGenerator=useCallback(()=>{
    let pass=""// generated password wil store here
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"// helper to generate password 
    if(numallowed) str+="0123456789"
    if(charallowed) str+="^&*()#@!{}:;"

    for (let i = 0; i < length; i++) {
      let randomIndex=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(randomIndex);
    }
    SetPass(pass)

  },[length,numallowed,charallowed,SetPass])


const passRef=useRef(null)


const copyToclipboard=useCallback(()=>{
  passRef.current?.select()
  passRef.current?.setSelectionRange(1,24)
  window.navigator.clipboard.writeText(pass);
},[pass])



  // useeffect hook to call a function on loading ..

  useEffect(()=>{
    passGenerator();
  },[length,numallowed,charallowed,passGenerator])




  return (
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
       <h1 className='text-white text-center my-3'>Password generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
              type="text"
              value={pass}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly 
              ref={passRef}// giving the ref of input field 
    
          />
         <button onClick={copyToclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          

       </div>
       <div className='flex text-sm gap-x-2'>
       <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={18}
        value={length}
         className='cursor-pointer'
         onChange={(e)=>{
          SetLength(e.target.value)
         }}
         
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numallowed}
          id="numberInput"
          onChange={() => {
              SetAllowed((prev) => !prev);// yha pr toggling ho rhi h false ka true and then true ka false 
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  SetCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      

       </div>

   </div>
  )
}

export default App
