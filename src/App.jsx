import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Player from '../Player';
import Users from '../Users';
import Friends from '../Friends';



function App() {
  
  function handleClick(){
    alert('button click')
  }

  const handleClick2 = ()=>{
    alert('click 2 button')
  }

  const addToFive =(num)=>{
    alert(num * 3)
  }

  return (
    <>
   <h3>react core concept 2</h3>
   <Friends></Friends>
   <Users></Users>
  <Player></Player>
   <Counter></Counter>
   <button onClick={handleClick}>click me</button>
   <button onClick={handleClick2}>click 2</button>
   <button onClick={()=>{ alert("click 3 button")}}>click 3</button>
   <button onClick={()=> addToFive(4)}>click 4</button>
    </>
  )
}

export default App
