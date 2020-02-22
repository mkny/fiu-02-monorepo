import React from 'react'

function Button(props) {
  return (
    <button style={{
      padding: 10,
      margin: 10
    }} {...props} />
  )
}

export default Button
