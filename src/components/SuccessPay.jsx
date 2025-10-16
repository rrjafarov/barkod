import React from 'react'
import { FaCheck } from "react-icons/fa6";

const SuccessPay = ({t}) => {
  return (
    <div>
        <div className="container">
            <div className="successPay">
                <div className="successPayIcon">
                    <FaCheck className='fiCheck' />
                </div>
                <h5>{t?.paymentpage}</h5>
                <button>{t?.homepagepayment}</button>
            </div>
        </div>
    </div>
  )
}

export default SuccessPay