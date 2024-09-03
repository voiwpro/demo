import { useState } from "react";

export default function Forms(){
    const [username,stateusername]=useState('kor')
     function change(event){
         stateusername(event.target.value);
     }
    return(
        <>
        <label htmlFor="yo">name</label>
        <input type="text" onChange={change} value={username} id="yo" />
        <button type="submit">submit</button>
        </>
    )
    
}