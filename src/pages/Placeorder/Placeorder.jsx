import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../Context/Storecontext'

const Placeorder = () => {
    const {gettotalCartAmount}= useContext(Storecontext);
  return (
    <form className='place_order'>
        <div className="place_order_left">
            <p className="title">Delivery Info</p>
            <div className="multi_feilds"> 
                <input type="text" placeholder='First name' />
                <input type="text"  placeholder='Last name'/>

            </div>
            <input type="email" placeholder='Email Address' />
            <input type="text"  placeholder='Street'/>
            <div className="multi_feilds"> 
                <input type="text" placeholder='City' />
                <input type="text"  placeholder='State'/>

            </div>
            <div className="multi_feilds"> 
                <input type="text" placeholder='Zip Code' />
                <input type="text"  placeholder='Country'/>

            </div>
            <input type="text"placeholder='Phone' />
        </div>
        <div className="place_order_right">
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
                <button >PROCEED TO PAY</button>
        </div>
        </div>
    </form>
  )
}

export default Placeorder
