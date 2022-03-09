import { useState } from 'react'
import Arrow from "../asset/coolicon.svg"

function Details() {
    const [isHidden, setIsHidden] = useState(true)

  return (
    <div className="details">
        <div className="toggleContainer" onClick={() => setIsHidden(!isHidden)}>
            <p>
            {isHidden ? "Show Details" : "Hide Details"}
            </p>
            <i className={`${isHidden ? "reverse" : null}`} ><img src={Arrow} /></i>
        </div>    

        {!isHidden ? (
            <div className="detailsContainer">
            <div className="header">
                <h5>APY</h5>
                <h4>63.34%</h4>
            </div>
            <ul>
                <li>Calculated based on current rates</li>
                <li>All fugures are estimates provided for your convenience only, and by no means represent guaranted returns.</li>
            </ul>
        </div>
        ) : null}

        
    </div>
  )
}

export default Details