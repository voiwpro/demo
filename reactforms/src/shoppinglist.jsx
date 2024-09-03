import { useState } from "react";

export default function Shoppingform(){
const [formdata,setFormdata]=useState({item:'',quantity:""})
const [items,setitems]=useState([])
function chaange(evt){
    setFormdata((oldform)=>{
        return{
            ...oldform,
            [evt.target.name]:evt.target.value
        }
    })  
}
function submit(){  
    setitems((olditems)=>{
        return[
            ...olditems,
            {item:formdata.item,quantity:formdata.quantity}
        ]
        
    })
    setFormdata(()=>({item:'',quantity:''}))

    // setFormdata({item:'',quantity:""})
}
function remove(id){
    setitems((olditems)=>{
        return  olditems.filter((_,index)=>index!== id)
    })
}

    return(
        <>
            <h1>Shopping List</h1>
            {items.length>0 && (
                items.map((e,index)=>{
                 return <li key={index}>{e.item},{e.quantity}<button onClick={()=>remove(index)}>remove</button></li>
                })
            )}
            <label htmlFor="item"></label>
            <input id="item" name="item" type="text" placeholder="roses" onChange={chaange} value={formdata.item} />
            <label htmlFor="quantity"></label>
            <input id="quantity" name="quantity" type="text" placeholder="3" onChange={chaange} value={formdata.quantity} />
            <button onClick={submit}>add item</button>
        </>
    )
}