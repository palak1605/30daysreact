import React from 'react'
import "../../CSS/Datadash.css";


function Datadash({title,value,iconValue}) {

  return (
    <div className='cardWrapper'>
      <h2 className='cardTitle'>{title}</h2>
      <div className='cardbody'>
        <div>{value}</div>
        <div>{iconValue}</div>
      </div>
       
    </div>
  )
}

export default Datadash