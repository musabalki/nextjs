'use client'
import React, { useEffect,useState } from 'react'

const getData = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  return  res.json();
}
const getData2 = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2")
  return  res.json();
}
const getData3 = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3")
  return  res.json();
}
export default async function Page() {
  const data =  getData();
  const data2 =  getData2();
  const data3 =  getData3();
  const dataResult = await Promise.all([data,data2,data3])

  console.log(dataResult)
  /*const [message,setMessage] = useState("initial");
  useEffect(()=>{
    setMessage("useEffect Message")
  },[])
  console.log("Page")*/
  return (<div>Page</div>)
}
