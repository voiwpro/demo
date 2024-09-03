import Colorchange from "./colorcomp";
export default function Colorcoder({colo}){
    let box=[]
    let val=colo;
    function col(){
        for(let i=0;i<val;i++){ 
            box.push(<Colorchange/>)
        }
    }
    col();
return(
    
    <div style={{display:'flex'}}>
    {box}
    </div>
)
}