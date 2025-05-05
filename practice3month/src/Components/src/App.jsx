import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Trafficcode from './Components/Trafficcode'
import Caraousel from './Components/Caraousel'
import DashBoard from './Components/Dashboard/DashBoard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Trafficcode/> */}
   {/* <Caraousel/> */}
   <DashBoard/>
    </>
  )
}

export default App
