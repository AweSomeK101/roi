import { useState } from "react";
import icon from '../asset/icon-round-512.png'

function Input() {
    const [isCake, setIsCake] = useState(true);

  return (
    <div className="inputCont">
        <div className="symbols">
            <div>
                <img src={icon} alt="icon" />
                <p className="currency">CAKE</p>
            </div>
            <label className="switch">
                <input type="checkbox" onChange={() => setIsCake(!isCake)} />
                <span className="slider round"></span>
            </label>
            <p className="currency">USD</p>
        </div>

        <div className="inputBox">
            <input type="number" className="h4" id="input" />
            <div className='inputCurrency'>
                <h4>{isCake? "CAKE" : "USD"}</h4>
            </div>
        </div>

        <div className="inputOpts">
            <div>
                <div className="select selectBgCol">
                    <p>USE BALANCE</p>
                </div>
                <div className="select">
                    <p>$1000</p>
                </div>
                <div className="select">
                    <p>$100</p>
                </div>
            </div>
            <p>~$20.82</p>
        </div>
    </div>
  )
}

export default Input