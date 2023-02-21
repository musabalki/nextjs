import React from 'react'
import {notFound} from "next/navigation"
export default function page({searchParams}) {
    if(searchParams.error=="true"){
        throw new Error("This is an error")
    }
    //notFound()
  return (
    <div>blog page</div>
  )
}
