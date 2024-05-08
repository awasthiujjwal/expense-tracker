import React, { useState } from 'react'

const About = () => {
  let arr=[
    {id:1, name:"ujjwal",age:22},
    {id:2, name:"ujjwal",age:22},
    {id:3, name:"ujjwal",age:22},
    {id:4, name:"ujjwal",age:22}
  ]
  
  return (
    
    <div>
     
      {arr.map((arr)=>{
        return <div style={{display:"flex"}}>
          <p>{arr.id}</p>
          <p>{arr.name}</p>
          <p>{arr.age}</p>
         </div>
      })
     
       } 
       
    </div>
  )
}

export default About
