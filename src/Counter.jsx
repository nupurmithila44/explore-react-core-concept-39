import { useState } from "react"


export default function Counter (){
    const [count, setCount] = useState(0)
    const handleClick =()=>{
        const countadd = count + 1;
        setCount(countadd)
    }

    const handleoddclick =()=>{
        const countodd = count - 1;
        setCount(countodd)
    }

   
    return(
        <div>
            <h3>Counter :{count}</h3>
        <button onClick={handleClick}> click 5 </button>
        <button onClick={handleoddclick}> click 6 </button>
        </div>
       
    )
}