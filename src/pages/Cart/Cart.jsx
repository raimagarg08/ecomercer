import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
 
const {cartItems,food_list,removeFromCart,getTotalCartAmount}= useContext(StoreContext);

const navigate= useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>      
            </div>
            <br/>
            <hr/>
            {food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
                return (
                  <>
                  <div className="cart-items-title cart-items-item">
                   <img src={item.image} alt="" />
                   <p>{item.name}</p>
                   <p>₹{item.price*10}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>₹{item.price*10 *cartItems[item._id]}</p>
                   <p onClick={()=>{
                        removeFromCart(item._id)
                   }} className='cross'>x</p>
                  </div>
                  <hr/>
                  </>
                )
              }

            })}
            
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>
            Cart Totals 

          </h2>
          <div><div className="cart-total-details"><p>Subtotal</p>
          <p>₹{getTotalCartAmount()*10}</p></div>
          <div className="cart-total-details"> <p>Delivery fee</p> 
          <p>₹{2}</p>
           </div>

          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{getTotalCartAmount()*10+2}</b>
            </div></div>
          <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <dir>
            <p>if you have a promo code , enter it here </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter promo code"/>
              <button>Apply</button>
            </div>
          </dir>
        </div>
      </div>
    </div>
  )
}

export default Cart
