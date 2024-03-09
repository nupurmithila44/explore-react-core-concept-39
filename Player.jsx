import { useState } from "react"

export default function Player(){

    const [player, setplayer] = useState(11)
    const handleClick1 =()=>{
      const playeradd = player +1;
      setplayer(playeradd)
    }

   const handleClick2 =()=>{
    setplayer(player-1)
   }
   
    const stylePlayer ={
        border:'2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius:'15px'
    }

    return(
        <div style={stylePlayer}>
            <h3>player count : {player} </h3>
            <button onClick={handleClick1}>add</button>
            <button onClick={handleClick2}> remove : </button>
        </div>
    )
}