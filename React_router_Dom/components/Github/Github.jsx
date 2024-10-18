import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const[data,setdata]=useState([])
    // fetch('https://api.github.com/users/ansh0712jul')
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data)
    //     setdata(data)
    // })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'> {data.name}
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}</div>
    <img  src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

 export const githubInfoLoader= async ()=>{
    const res=await fetch('https://api.github.com/users/ansh0712jul')
    return res.json()
}
