import './App.css' 
import React from 'react'

export default function Die(prop) {
const style={
  backgroundColor:prop.isHeld?'#59E391':'white'
}
 
  return (
    
     
        <div className='value'style={style}>
   <h2 className='number'onClick={()=>{prop.holdDice(prop.id)}}>{prop.value}</h2>
   </div>

  
      
   
  )
}
