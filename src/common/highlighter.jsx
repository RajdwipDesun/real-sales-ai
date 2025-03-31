import React from 'react'

const Highlighter = (props) => {
  return (
    <div className='highlighted-chip'>{props?.highlight || "RealSales"}</div>
  )
}

export default Highlighter