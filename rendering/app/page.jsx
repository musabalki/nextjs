'use client'
import React, { useEffect,useState } from 'react'

export default function Page() {
  const [message,setMessage] = useState("initial");
  useEffect(()=>{
    setMessage("useEffect Message")
  },[])
  console.log("Page")
  return (
    <div>Page
      {message}
    </div>
  )
}
