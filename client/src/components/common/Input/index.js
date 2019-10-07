import React from 'react'

const Input = ({
  placeholder = '',
  className = '',
  type = ''
}) => (
  <input 
    type={type}
    placeholder={placeholder}
    className={className}/> 
)

export default Input