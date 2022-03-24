import React from 'react'

const FormText = ({width, margin, children}) => {
  return (
    <div
    style={{
      color: "#fff",
      margin,
      fontSize: "0.625rem",
      margin: 0,
      textTransform: "uppercase",
      width: width,
      fontFamily: "Roboto",
      letterSpacing: "0.0625rem",
    }}
  >
    {children}
  </div>
  )
}

export default FormText