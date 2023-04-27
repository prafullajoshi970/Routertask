import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='NavBar'>
        <Link style={{textDecoration:"none",margin:"15px"}} to="/">Home</Link>
        <Link style={{textDecoration:"none",margin:"15px"}} to="/Product">Product</Link>
        </div>
  )
}

export default Nav