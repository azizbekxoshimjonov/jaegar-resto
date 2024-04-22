import React, { useState } from 'react'
import './Payment.scss'
import { payment__method_data } from './Data'
function Payment({setOpen}) {
  const [activeMethode, setActiveMethode] = useState(0)
  return (
      <div className="payment__container">
        <h2 className='payment__title'>Payment</h2>
        <p className='payment__methode'>3 payment method aviable</p>
        <div className="divider"></div>
        <div className="payment__methodes">
            <h4>Payment Method</h4>
            <div className="payments">
              {payment__method_data.map((Item) =>
              <div 
              onClick={() => setActiveMethode(Item.id)}
              className={activeMethode === Item.id ? "active_methode" : "methode"}>
                <Item.Icon active={activeMethode === Item.id}/>
                <p className='text'>{Item.name}</p>
              </div>
              )}
            </div>
            <div className="forms__container">
              <div className="inputs">
                <label>Cardholder Name</label>
                <input type="text"placeholder='Levi Ackerman'className='input' />
              </div>
              <div className="inputs">
                <label>Card Number</label>
                <input type="number"placeholder='2564 1421 0897 1244'className='input' />
              </div>
              <div className="row">
              <div className="inputs">
                <label>Expiration Date</label>
                <input type="number"placeholder='02/2022'className='input' />
              </div>
              <div className="inputs">
                <label>CVV</label>
                <input type="number"placeholder='***'className='input' />
              </div>
              </div>
              <div className="butons">
                <button className='canel' onClick={() => setOpen(false)}>Canel</button>
                <button className='buy'>Confirm Payment</button>
                
              </div>
            </div>
        </div>
      </div>
  )
}

export default Payment
