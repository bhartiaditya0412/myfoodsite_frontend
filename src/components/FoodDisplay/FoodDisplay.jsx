import React, { useContext } from 'react'
import './FoodDisplay.css'
import { Storecontext } from '../../Context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(Storecontext)
  return (
    <div className='food_diaplay' id='food_display'>
        <h2>Most Liked Dishes recently</h2>
           <div className="food_display_list">
            {food_list.map((item,ind)=>{
                if(category==="All"|| category ===item.category ){
                    return <FoodItem key={ind} id={item._id} name={item.name} price={item.price} describe={item.description} image={item.image}/>
                }
                 
            })}
           </div>
    </div>
  )
}

export default FoodDisplay
