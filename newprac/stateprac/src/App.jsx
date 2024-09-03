import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Click from './clickk'
import Toggle from './toggler'
import Colorchange from './colorcomp'
import Colorcoder from './colorassembler'
function App() {
  let box=[];
  function mulrow(numrow){
    for(let i=0;i<numrow;i++){
      box.push(<Colorcoder colo={2  }/>)
    }
  }
  mulrow(7)
  return (
    <>
    {box}
    </>
    
  )
}

export default App
