import { useState } from "react"
export default function Click() {
    const [num,numState]=useState(1)
    const [red,redState]=useState(false)
    const [green , greenState]=useState(false)
    function clicked(){
        numState(num+1)
        redState(false)
        greenState(true)
    }
    function reduce(){
        numState(num-1)
       const val= document.querySelectorAll(".bok")
        redState(true)
        greenState(false)
    }
    return(
    <>
        <p>{num}</p>
        <button style={{backgroundColor:green? 'green':'inherit'}} className="bok" onClick={clicked}>clickme</button>
        <button style={{ backgroundColor: red ? 'red' : 'inherit' ,}} onClick={reduce}>reduce</button>
    </>
    )
}