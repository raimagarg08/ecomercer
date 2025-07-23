import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext)
  return (
   <form className='place-order'>
<div className="place-order-left">
  <p className="title">
    Delivery information
  </p>
  <div className="multi-fields">
    <input type="text" placeholder='firstname' />
    <input type="text" placeholder='lastname' />
  </div>
  <input  type='email' placeholder='email Address' />
  <input type="text" placeholder='street' />
</div>
<div className="multi-fields">
    <input type="text" placeholder='City' />
    <input type="text" placeholder='State' />
  </div>
  <div className="multi-fields">
    <input type="text" placeholder='zipcode' />
    <input type="text" placeholder='Country' />
  </div>
  <input type="text"  placeholder='phone'/>
  <div className="place-order-right">

 <div className="cart-total">
          <h2>
            Cart Totals 

          </h2>
          <div><div className="cart-total-details"><p>Subtotal</p>
          <p>₹{getTotalCartAmount()*10}</p></div>
          <hr/>
          <div className="cart-total-details"> <p>Delivery fee</p> 
          <p>₹{2}</p>
           </div>
           <hr/>

          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{getTotalCartAmount()*10+2}</b>
            </div></div>
          <button>Proceed to PAyment</button>
        </div>


  </div>
   </form>
  )
}

export default PlaceOrder
