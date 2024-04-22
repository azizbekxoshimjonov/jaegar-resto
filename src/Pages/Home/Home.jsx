import React, { useEffect, useState } from 'react'
import './Home.scss'
import loopa from '../../assets/img/Loopa.png'

import { OrdersButton, data, products } from './Data'
import Cart from '../../components/Cart/Cart'
import '../../components/Modal/Modal'
import ModalComponent from '../../components/Modal/Modal'
function Home() {
  const [filter, setfilter] = useState(0)
  const [product, setProducts] = useState(products)
  const [inputValue, setInputValue] = useState('')
  const [orderActive, setOrderActive] = useState(0)
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [open, setOpen] = useState(false)
  const handleActive = (id) => {
    setfilter(id)
    if(id !== null){
      const filteredData = products.filter((item) => item.filter === id)
      setProducts(filteredData)
    }else{
      setProducts(products)
    } 
  }  
  useEffect(() => {
    const search = products.filter((item) => item.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
    setProducts(search)
  }, [inputValue]) 
  const handleCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updateCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price: Math.floor( Number(item.price) + Number(product.price))
          }
        }
        return item;
      });
      setCart(updateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

  };
  useEffect(() => {
    const totalPrice = calculateTotalPrice(cart)
    setTotalPrice(totalPrice)

  }, [cart])
  function calculateTotalPrice(cart){
    return cart.reduce((total,item) =>{
      return total + (Number(item.price) * item.quantity)
    }, 0)
   }
  const handleDeleteProduct = (id) => {
    const deleted = cart.filter((item) => item.id !== id)
    setCart(deleted)
  } 
  return (
    <div className='home__container'>
     <div className="home__content">
      <div className="home__header">
        <div className="home_header_text">
        <h1 className='home__title'>Jaegar Resto</h1>
        <p className='home__des'>Tuesday, 2 Feb 2021</p>
      </div>
      <div className='home_input_header'>
        <img className='loopa' src={loopa} alt="" />
     <input type="text" className='header__search' placeholder='Search for food, coffe, etc..' 
     onChange={(e) => setInputValue(e.target.value)}
     />
     </div>
     </div>
     <div className="filter__header">
      {data.map((item)=>
       <p className={item.id === filter ? "active_filter" : "filter__text"}key={item.id}
       onClick={()=> handleActive(item.id)}
       >{item.name}</p>
      )}
     </div>
     <h1 className='dish__title'>Choose Dishes</h1>
     <div className='products'>
     {product.length === 0 ?(<h1 className='note__found'>Nothing Found</h1>) : product.map((item) =>
      <div className='cart_container' onClick={() => handleCart(item)}>
        <img src={item.image} className='cart__image' alt="" />
        <h4 className='cart__title'>{item.title}</h4>
        <p className='cart__price'>${item.price}</p>
        <p className='bowls'>{item.dish } Bowls available</p>
        
      </div>
      )}
     </div>
     </div>
     <div className="home__chart">
      <p className='orders'>Orders #34562</p>
      <div className='order__filter'>
        {OrdersButton.map((item) =>
        <button className= {item.id === orderActive ? "active_order_button" : "order_button"} key={item.id}
        onClick={() => setOrderActive(item.id)}
        >{item.name}</button>
        )}
      </div>
      <div className="cart__haeder">
        <p className='cart_header_name'>Item</p>
        <div className='header__wrapper'>
        <p className='cart_header_name'>Qty</p>
        <p className='cart_header_name'>Price</p>
        </div>
      </div>
      <div className="cart__component">
      {! cart.length ? (<h1>Your cart empty</h1>) : cart.map((item) =>
      <Cart
      id={item.id} title={item.title} price={item.price} image={item.image}
      handleDeleteProduct={handleDeleteProduct}
      quantity={item.quantity}
      />
      
      )}
      </div>
      <div className="payment__container">
        <div className='payment__price'>
          <p className="payment__text">Discount</p>
          <p className='payment__init'>$0</p>
        </div>
        <div className="payment__price">
        <p className="payment__text">Sub total</p>
          <p className='payment__init'>${totalPrice}</p>
        </div>
        <button className='buy__button' onClick={() => setOpen(true)}
        disabled={!cart.length}
        >Continu to Payment</button>
      </div>
      {/* <button className='buy__button'>Continu to Payment</button> */}
      
    

      
     </div>
     < ModalComponent open={open} setOpen={setOpen}/>

    

     </div>
     
  )
        }
        

export default Home