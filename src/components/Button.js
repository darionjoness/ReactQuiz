import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <div>
        <button className='nextBtn' onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button