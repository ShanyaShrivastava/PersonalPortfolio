import React from 'react'
import Link from 'next/link'
import './navbar.scss'
const Navbar = () => {
  return (
    <div>
      <div className='wrapper'>
      <Link className='s' href="/">SHANYA SHRIVASTAVA</Link>
      <div className='m'>
        <ul className='me'>
          <li><Link className="menu" href="/">Home</Link></li>
          <li><Link className="menu" href="/Education">Education</Link></li>
          <li><Link className="menu" href="/Skills">Skills</Link></li>
          <li> <Link className="menu" href="/resume">Projects</Link></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
