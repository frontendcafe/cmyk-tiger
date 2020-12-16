import React from 'react'
import { Link } from 'react-router-dom'
import InputForm from './InputForm'

export const Footer = () => {
  return (
    <footer>
      <p>
        <Link to="/">
          <i className="fas fa-film"></i>
        </Link>
      </p>
      <div>
        <p>Top Rated Movies</p>
        <p>Most Popular</p>
        <p>Currently in theaters</p>
        <p>About</p>
      </div>
      <InputForm />
    </footer>
  )
}
