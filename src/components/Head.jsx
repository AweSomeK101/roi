import React from 'react'
import closeIcon from "../asset/icon.svg"

function Head() {
  return (
    <div className="head">
        <h3>ROI Calculator</h3>
        <img src={closeIcon} alt="close" />
    </div>
  )
}

export default Head