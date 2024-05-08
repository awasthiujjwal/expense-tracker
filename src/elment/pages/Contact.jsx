import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [arr, setarr] = useState([]);
  async  function fetchapi(){
    let response =  await fetch('https://fakestoreapi.com/products')
     let data = await response.json ();
     console.log (data)
     setarr(data)
        }
    
        useEffect(()=>{
          fetchapi()
        },[])
  return (
    <div className='contact'>
     {arr.map((obj)=>{
      return <div key={obj.id} className='contactbox'>
        {/* <p>{obj.id}</p>   */}
        <img style={{height:"100px"}} src={obj.image} alt="" srcset="" />
        <p>{obj.title}</p>
        <p>{obj.price}</p>
        <button>add to cart</button>
      </div>  
         })

     }
    </div>
  )
}

export default Contact
