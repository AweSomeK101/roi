import React from 'react'

function Options() {
  return (
    <div className="options">
        <div className="timeframe">
            <p className="heading">Timeframe</p>
            <div className="selectContainer">
                <Select opt="1 Day" highlight/>
                <Select opt="7 Days" />
                <Select opt="30 Days" />
                <Select opt="1 Year" />
                <Select opt="5 Years" />
            </div>
        </div>

        <div className="apy">
            <div className='headingContainer'>
                <p className="heading">Enable Accelerated APY</p>    
                <label className="switch">
                    <input type="checkbox"  />
                    <span className="slider round"></span>
                </label>
            </div>
            <p className="subHeading">Select Tier</p>
            <div className="selectContainer">
                <Select opt="Tier 1" />
                <Select opt="Tier 2" />
                <Select opt="Tier 3" highlight/>
                <Select opt="Tier 4" />
                <Select opt="Tier 5" />
            </div>
        </div>
    </div>
  )
}

function Select({opt, highlight}){
    return(
        <div className={`select ${highlight? "selectHighlight" : null}`}>
            <p>{opt}</p>
        </div>
    )
}

export default Options