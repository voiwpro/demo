import { useState,useEffect } from "react";


export default function Counter(){
    const[count,setCount]=useState(0);
    function counter(){
        setCount((count)=>{
            return count+1;
        })
    }
    useEffect(()=>{
        console.log('hii')
    })
    return(
        <>
        <div>
            <p>{count}</p>
            <button onClick={counter}>count</button>
        </div>
        </>
    )
}