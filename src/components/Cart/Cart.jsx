import React from 'react'
import './Cart.scss'
import delet from '../../assets/img/delet.png'
function Cart(props) {
  return (
    <div>
         <div className="cart__container">
        <div className="cart__head">
          <div className="header__content">
          <img className='cart__image' src={props.image} alt="" />
          <div>
            <h5>{props.title}</h5>
            <p>${props.price}</p>
          </div>
          </div>
          <div className="header__price">
            <div className="qty">{props.quantity}</div>
            <div className="price">${props.price}</div>
          </div>
        </div>
        <div className="cart__footer">
          <input type="text" className='order_note' placeholder='Order Note...' />
          <div className="delete">
            <img src={delet} alt="" onClick={() => props.handleDeleteProduct(props.id)} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart
