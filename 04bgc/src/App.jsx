import {useState} from 'react';
function App() {
  const [color, setColor] = useState('')

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white'>
      <div className=' flex flex-wrap justify-center gap-6 bg-white px-3 py-2 rounded-2xl shadow-lg'> 
        <button onClick={()=>setColor("red")}
        className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"red"}}
        >Red</button>
        <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"green"}}
        >Green</button>
        <button onClick={()=>setColor("blue")} className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"blue"}}
        >Blue</button>
        <button onClick={()=>setColor("yellow")} className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"yellow"}}
        >yellow</button>
        <button onClick={()=>setColor("black")} className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"black"}}
        >Black</button>
        <button onClick={()=>setColor("pink")} className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"pink"}}
        >Pink</button>
        <button onClick={()=>setColor("olive")} className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"olive"}}
        >olive</button>
        <button onClick={()=>setColor("gray")} className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"gray"}}
        >gray</button>
        <button onClick={()=>setColor("purple")} className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"purple"}}
        >purple</button>
        <button onClick={()=>setColor("Lavender")} className='outline-none px-4 rounded-full shadow-lg ' style={{backgroundColor:"Lavender"}}
        >Lavender</button>
      </div>
    </div>
   </div>
   
  )
}

export default App
