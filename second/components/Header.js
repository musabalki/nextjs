import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import headerStyles from "../styles/Header.module.css"

const Header = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <div className={headerStyles.title}>Header</div>
      <Link href="/">Ok</Link>
    </div>
  )
}

export default Header