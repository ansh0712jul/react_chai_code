import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-slate-500  rounded-xl p-2 mb-3'>tailwindcss test</h1>
      <Card username='Ansh Agrawal'></Card>
  
    </>
  )
}

export default App
