import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/Storecontext';

const FoodItem = ({id,name, price, describe,image}) => {

    // const [itemcount,setitemcount]= useState(0);
    const {CartItems,addtoCart,removefromCart}=useContext(Storecontext);
  return (
    <div className='food_item'>
        <div className="food_item_image_container">
            <img  className='food_item_image'src={image} alt="" />
            {!CartItems[id]
                ?<img className='add' onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="food_item_counter">
                    <img onClick={()=>removefromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{CartItems[id]}</p>
                    <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food_item_info">
            <div className="food_item_name_rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />

            </div>
            <p className="food_item_description">{describe}</p>
            <p className="food_item_price">Rs.{price}  </p>
        </div>
    </div>
  )
}

export default FoodItem
