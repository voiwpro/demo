import {v4 as uuid} from 'uuid'
import { useState } from "react";

export default function Arprac(){
   const [val,setVal]= useState([{id:uuid(),vom:'nandubaba'}])
   function chan(){
    setVal((pop)=> [...pop,{id:uuid(),vom:'popi'}])
   }
   function delet(id){
    setVal((po)=>{
        return po.filter(o=>o.id!==id)
    })
   }
   return(
    <>
    {val.map((e)=>(<span onClick={()=>delet(e.id)}  key={e.id}>"{e.vom}"</span>))}
    <p><button onClick={chan}>click this</button></p>
    </>
   )
}