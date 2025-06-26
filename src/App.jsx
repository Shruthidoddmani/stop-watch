import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState('')
  let timeout;

  useEffect(() => {
    if (state === 'running') {
      timeout = setInterval(() => {
        setCount(count => count + 1);
      }, 1000)
    } else if(state === 'reverse'){
      timeout = setInterval(() => {
        setCount(count => count - 1);
      }, 1000)
    }
    return (() => {
      clearInterval(timeout);
    })
  }, [state])
  
  const startHandler = () => {
    setState('running');
  }

  const stopHandler = () => {
    setState('stop');
  }

  const reverseHandler = () => {
    setState('reverse');
  }

  return (
    <>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={reverseHandler}>Reverse</button>
      <p>{count}</p>
    </>
  )
}

export default App
