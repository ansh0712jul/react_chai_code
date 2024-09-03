import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(10);
  let add_value=()=>{
    setCounter(counter+1);

  }
  
   let rmv_value=()=>{
      if(counter>0){
        setCounter(counter-1);

      }
      
    }

  
  return (
    <>
    <h1>chai or react</h1>
    <h1>counterValue:{counter}</h1>
    <button
    onClick={add_value}
    >addValue</button>
    <button
    onClick={rmv_value}>removeValue</button>

    </>
  )
}

export default App
