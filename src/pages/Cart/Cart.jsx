import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../Context/Storecontext'
import { Link, useNavigate } from 'react-router-dom'
// import { food_list } from '../../assets/assets'
const Cart = () => {
  const   {CartItems,food_list,removefromCart,gettotalCartAmount} = useContext(Storecontext)
  const navigate = useNavigate();
  return (
    <div className='cart'>
        <div className="cart_items">
        <div className="cart_items_title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,ind)=>{
            if(CartItems[item._id]>0){
                return (
                    <div >

                    <div className="cart_items_title cart_items_item">
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>Rs.{item.price}</p>
                        <p>{CartItems[item._id]}</p>
                        <p>Rs.{item.price*CartItems[item._id]}</p>
                        <p onClick={()=>removefromCart(item._id)} className='cross'>x</p>
                    </div>
                    <hr />
                    </div>

                )
            }
        })}
        </div>
      <div className="cart_bottom">
        <div className="cart_total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart_total_details">
                    <p>Subtotal</p>
                    <p>Rs.{gettotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart_total_details">
                    <p>Delivery Fee(5%) </p>
                    <p>Rs.{0.05*gettotalCartAmount()}</p>

                </div>
                <hr />
                <div className="cart_total_details">
                    <p>Total</p>
                    <b>Rs.{1.05*gettotalCartAmount()} </b>
                </div>
                
                 
            </div>
               <Link to={'/order'} > <button >PROCEED TO CHECKOUT</button></Link>
        </div>
        <div className="cart_promocode">
            <div >
                <p>If you have a promocode ,Enter it here </p>
                <div className="cart_promocode_input">
                    <input type="text" placeholder='promo code' />
                    <button>Submit </button>
                     

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
