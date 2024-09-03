import { useState } from "react"
export default function Toggle(){
    const [change ,changeState]=useState(true)
    function chunges(){
        changeState(!change)
    }
    return(
        <div>
            <p onClick={chunges}>{change ? 'fuckme' : 'nothappy'}</p>
        </div>
    )
}