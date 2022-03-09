import React from 'react'

function Apply() {
  return (
    <div className="apply">
        <div className='applyOutputContainer'>
            <p className='subHeading'>ROI at Current Rates</p>
            <div className="inputBox">
                <input type="number" className="h4" id="input" />
                <div className='inputCurrency'>
                    <h4>USD</h4>
                </div>
                <i></i>
            </div>
            <p>~3 CAKE + 10 DON</p>
        </div>
        <div className="buttonContainer">
            <button className="btnApply">Apply</button>    
            <button className="btnCancel">Cancel</button>    
        </div>
    </div>
  )
}

{/*  */}

export default Apply