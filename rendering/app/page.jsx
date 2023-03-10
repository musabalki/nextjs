'use client'
import React, { useEffect,useState } from 'react'

const getData = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  return  res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data)
  /*const [message,setMessage] = useState("initial");
  useEffect(()=>{
    setMessage("useEffect Message")
  },[])
  console.log("Page")*/
  return (<div>Pagetest</div>)
}
