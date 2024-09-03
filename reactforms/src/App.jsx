import { useState } from 'react'
import './App.css'
import Forms from './forms'
import Shoppingform from './shoppinglist'
import Counter from './counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter/>
    </>
  )
}

export default App
