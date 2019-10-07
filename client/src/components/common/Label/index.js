import React from 'react'

const Label = ({
  className,
  children
}) => (
  <label className={className} onClick={onClick}> {children} </label>
)

export default Label