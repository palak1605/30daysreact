import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Trafficcode from './Components/Trafficcode'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Trafficcode></Trafficcode>
    </>
  )
}

export default App
