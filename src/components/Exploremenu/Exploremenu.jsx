import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setcat}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore Your Menu</h1>
        <p className='exploremenutext'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nam necessitatibus et vel. Laboriosam vitae deleniti sunt consequuntur fugit! Ab fugiat odit laborum expedita quae?</p>
        <div className="exploremenulist">
            {menu_list.map((item,ind)=>{
                return(
                         <div onClick={()=>setcat(prev=>prev===item.menu_name?"All":item.menu_name)} key={ind} className="exploremenulistitem">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                         </div>
                )
            })}
        </div>
      <hr />
    </div>
  )
}

export default Exploremenu
