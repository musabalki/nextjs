import React from 'react'

export const getAllPosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  return res.json()
}

export const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export default async function IdPage({params}) {
  //console.log("Idpage",params.id)
  const data = await getSinglePost(params.id)

  return (
    <div>IdPage {data.title} </div>
  )
}

export async function generateStaticParams(){
  const posts  = await getAllPosts()
  
  return posts.map(post=>{id:`${post.id}`})
}