'use client'
import React, { useEffect,useState } from 'react'

const getData = async() =>{
  /*const res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
    cache:"no-store"
  })*/
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
    next:{revalidate:10}
  })
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
  return (<div>Page</div>)
}
