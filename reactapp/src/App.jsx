import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pokemon from './pokcard';


function App() {
  let colors=['black','white','red','yellow']
  return (
    <>
    <Pokemon name={{name:'amith',stream:'cs',intern:true}} color={colors}/>
    </>
  );
}

export default App
