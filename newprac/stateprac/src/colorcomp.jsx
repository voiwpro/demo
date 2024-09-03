import { useState } from "react";
import './colors.css';

export default function Colorchange(){
const colors=['red','yellow','green','blue','gray','white','black','indigo','purple','cyan']    
let initial=Math.floor(Math.random()*10)
const[color,changeColor]=useState(colors[initial])

function changecol(){
    let val=Math.floor(Math.random()*10);
    changeColor(colors[val])
}
return(
    <div className="colorbox" style={{backgroundColor:color}} onClick={changecol}>
    
    </div>
)


}