import React from 'react'
import Datadash from './Datadash'
import "../../CSS/Dashboard.css"
import BarChart from './BarGraph';
import PieChart from './PieChart';
import Target from './Target';
import { dashboardStats } from '../../Constants/dashboardStats';
function DashBoard() {
  return (
    <>
    <div className='dashBoradwrapper'>
       { dashboardStats.map((item,i)=>{
        return <Datadash title={item.title} value={item.value} iconValue={item.iconValue}/>
       })}
  
    </div>
    <div className='graphWrapper'>
    <div className='graphData' >
    <BarChart />
  </div>
  <div className='bargraph'>
      <h2>Survey Results</h2>
      <PieChart />
    </div>
    </div>
    <div className='dashBoradwrapper'>
       { dashboardStats.map((item,i)=>{
        return <Datadash title={item.title} value={item.value} iconValue={item.iconValue}/>
       })}
  
    </div>
    <Target></Target>
  </>
  )
}

export default DashBoard