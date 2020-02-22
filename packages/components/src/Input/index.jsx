import React from 'react'

const Input = ({label: htmlLabel, name, ...props}) => {
  return (
    <div>
      <div>{htmlLabel && <label htmlFor={name}>{htmlLabel}</label>}</div>
      <div><input style={{
        width: 400
      }} name={name} {...props} /></div>
    </div>
  )
}

export default Input
