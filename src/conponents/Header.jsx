import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>
    <div className='header'>
        <h1><Link className='link' to="/">Geography Seach</Link></h1>
        <ul className='navbar'>
            <li><Link className='link' to="/countries">Countries</Link></li>
            <li><Link className='link' to="/contact_us">Contact Us</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Header