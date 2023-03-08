import React from 'react'

export default function IdPage({params}) {
    console.log("Idpage",params.id)
  return (
    <div>IdPage {params.id} </div>
  )
}
