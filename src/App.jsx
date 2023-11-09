import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // React Hook
  let [counter, setCounter] = useState(0)
  // let counter = 5
  let add = counter >= 20

  // Adding Value function
  const addValue = () => {
    if (add) {
      setCounter(counter = 20)
      document.querySelector("#add").innerHTML = "The value not go above 20"
    }else{
      setCounter(counter + 1)
    }
    // console.log('value added', counter)
  }

  // decrecing value function
  let remove = counter <= 0
  const removeValue = () => {
   if (remove) {
    setCounter(counter = 0)
    document.querySelector("#add").innerHTML = ""
   }else{
    setCounter(counter - 1)
    document.querySelector("#add").innerHTML = ""
   }
  }

  const reset = () => {
    setCounter(counter = 0)
    document.querySelector("#add").innerHTML = ""
  }
  return (
    <>
     <h1>React Counter</h1>
     <h2>Counter Value: {counter}</h2>
     <b><p id='add'></p></b>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove Value</button>
     <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
