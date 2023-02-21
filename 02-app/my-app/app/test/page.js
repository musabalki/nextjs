import React from 'react'
async function delay(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms))
}
export default async function page() {
  await delay(200)
  return (
    <div>Test Page</div>
  )
}
