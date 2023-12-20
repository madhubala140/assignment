import React from 'react'
import "./button.css";

const Button = ({text}) => {
  return (
    <button className='navButton'>{text}</button>
  )
}

export default Button;