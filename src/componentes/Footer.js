import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to='/about'>
        <p>About</p>
      </Link>
    </footer>
  )
}
