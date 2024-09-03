function Demo(props){
   return <h1>{props.ispacked && (<del>yotf</del>)}</h1>
    
}


export default function Info(props) {
    function click(){
       return styles="backgroundColor='red'"   
    }
    return (    
        
        <div>
            
            <h1>{props.name.name}</h1>
            <h2>{props.name.stream}</h2>
            <h3>{props.name.intern}</h3>
            
            <Demo 
                
                name='onepiece'
            />
        </div>
    )

}