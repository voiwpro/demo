import { useState } from "react";
export default function Players(){
    const[score,setScore]=useState({play1:0,play2:0})
    function incp1(){
        setScore((val)=>{
          return {...val,play1:val.play1+1}
        });
    }
    function incp2(){
        setScore((noe)=>{
            return {...noe,play2:noe.play2+1}
        })
    }
    return(
        <>
        <div >
        <p>ay yo welcome</p>
        <p>player1:{score.play1}</p>
        <p>player2:{score.play2}</p>
        <button onClick={incp1}>player1</button>
        <button onClick={incp2}>player2</button>
        </div>
        </>
    )
}