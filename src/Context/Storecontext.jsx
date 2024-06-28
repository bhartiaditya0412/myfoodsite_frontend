import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null);
const StorecontextProvider = (props)=>{

    const [CartItems,setCartItems] = useState({});
    const addtoCart = (itemId)=> {
        if(!CartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removefromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const gettotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in CartItems){
            if(CartItems[item]>0){

                let itemInfo = food_list.find((product)=>product._id===item);
                totalAmount+=itemInfo.price*CartItems[item];
            }
        }
        return totalAmount;
    }
    const contextvalue = {
        food_list,
        CartItems,
        setCartItems,
        addtoCart, 
        removefromCart,
        gettotalCartAmount,
    }
    return (
        <Storecontext.Provider value={contextvalue}>
        {props.children}
        </Storecontext.Provider>
    )
}
export default StorecontextProvider