
import './App.css'
import Die from './Die'
import React from 'react'
import Confettie from './Confetti'

function App() {


const [dice,setdice]=React.useState(allNewDice)
const[tenzies,set_tenzies]=React.useState(false);


React.useEffect(()=>{
  const allHeld = dice.every(die => die.isHeld)
  const first_value=dice[0].value
  const check=dice.every(die=>die.value===first_value)
  if(allHeld&&check){
   set_tenzies(true)
   
  }

},[dice])


function allNewDice() {
  const newDice = []
 if(newDice.length===0){
  for (let i = 0; i < 10; i++) {
      newDice.push(GenerateDice())
  }}

  return newDice
}

function GenerateDice(){
  return{value:Math.ceil(Math.random() * 6),isHeld:false,id:Math.floor(Math.random()*20000000000)}
}

function RollDice(){
if(!tenzies){
  setdice((prev_dice=>{
 return prev_dice.map((item)=>{
      if(item.isHeld===true){
        return item
       
      }
   
      return GenerateDice();
      
    }
  )
  }))
}
else{
  set_tenzies(false)
  setdice(allNewDice())
}
}


function holdDice(id){
  
 setdice(item=>{
return item.map(items=>{
  if(items.id===id)
 return {...items,isHeld:!items.isHeld}
  return items;
}

)

 }
 
)
}

  return (
    
   <main className='maine'>
    {tenzies&&<Confettie />}
    <h1 className="Main-Text">Tenzies</h1>
    <p className='paragraph'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
<div className='container'>

{dice.map(items=>{
  return <Die key={items.id}value={items.value} isHeld={items.isHeld} holdDice={holdDice} id={items.id}/>
})}
 </div>
 <button onClick={RollDice} >{tenzies?'New Game':"Roll"}</button>
 
   </main>
  
  )
}

export default App
