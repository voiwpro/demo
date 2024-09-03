import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function Playgame({target}){
    const [play,setPlay]=useState([
        {uuid:uuid(),playerno:1,playerscore:0},
        {uuid:uuid(),playerno:2,playerscore:0},
        {uuid:uuid(),playerno:3,playerscore:0},
        {uuid:uuid(),playerno:4,playerscore:0}
    ])
    const [winer,setWinner]=useState();
    const[disable,setdisable]=useState();
    const[taret,settarget]=useState();
    let winner;
function updat(uuid){
   
    setPlay((oldplay)=>{
        return oldplay.map((e)=>{
            if(e.uuid===uuid){
                const newscore=e.playerscore+1
                if (newscore>=target){
                    winner=e.playerno
                    setWinner(()=>{
                        return e.playerno
                    })
                    setdisable((oldval)=>{
                        return oldval=true;
                    })
                }
                return {...e,playerscore:newscore}
               
            }
            return e;
        })
    })
}
function reset(){
    setPlay((oldplay)=>{
        return oldplay.map((e)=>{
            return {...e,playerscore:0}
        })
    
    })
    setWinner(()=>{
        return undefined;
    })
    setdisable((oldval)=>{
        if (oldval){
            return !oldval
        }
    })
}

function chan(e){
    settarget(()=>{
         e.target.value
    })
    
}

    return(
        <>
        <input 
            type="text" 
            value={taret} 
            onChange={chan}
        />
        <p>Target:{target}</p>
        {play.map((e)=>{
          return <li key={e.uuid}>player {e.playerno}: {e.playerscore} <button disabled={disable} onClick={()=>{
            updat(e.uuid)
          }}>+1</button></li> 
        })}
        <button onClick={reset}>reset</button>
        <p>winner:{winer}</p>
        </>
    )
}   