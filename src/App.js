
import './App.css'
import Die from './Die'
import React from 'react'

function App() {
 

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
}
const [dice,setdice]=React.useState(allNewDice)


  return (
   <main className='maine'>
    
<div className='container'>

{dice.map(items=>{
  return <Die value={items}/>
})}
 </div>
 
   </main>
  
  )
}

export default App
