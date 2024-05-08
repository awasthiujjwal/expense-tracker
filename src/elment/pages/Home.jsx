import React, { useState } from 'react'
import { useRef } from 'react'

const Home = () => {
    let idRef=useRef();
    let placeRef=useRef();
    let priceRef=useRef();
    

    const handlesubmit= (event)=>{
        event.preventDefault()
        // console.log('running')
       let sno=idRef.current.value
       let place=placeRef.current.value
       let price=priceRef.current.value
       let obj={
        id:sno,
        place,
        price,
       }
       console.log(obj)
       setarr([...arr,obj])
    }
     const [arr,setarr]=useState ([

    
    // let arr=[
      
        {
            id:1,
            place:" Movie",
            price:"300"

        },
        {
            id:2,
            place:" zoo",
            price:"450"

        },
        {
            id:3,
            place:" WaterPark",
            price:"1000"

        }
    // ]
  ])
  let sum=0
  arr.forEach((obj)=>{
    sum=sum+parseInt(obj.price)
  })
   const handledelete=(ans)=>{
    // console.log('running')
    let newArr=arr.filter((ele)=>ele.id  !==ans.id);
    console.log (newArr)
    setarr (newArr)
   }
  return (
   <div>
   <form action="" className='mt-3 bg-info p-3 d-flex  justify-content-center gap-4'>
    <label htmlFor="" >sr.no.</label>
    <input type="number" ref={idRef} placeholder='0'/>
    <label htmlFor="">Place</label>
    <input type="text" ref={placeRef} placeholder='Enter Place Name'/>
    <label htmlFor="">Price</label>
    <input type="number"ref={priceRef}  placeholder='Enter Amount' />
    <button className='btn btn-warning' onClick={handlesubmit}>Submit</button>
   </form>
    <table className="table mt-3 table-secondary" >
  <thead>
    <tr>
      <th scope="col">Sr.no.</th>
      <th scope="col">Place</th>
      <th scope="col">Price</th>
     <th scope='col' >Remove </th>
    </tr>
  </thead>
  <tbody>
  {arr.map((ele)=>{
    return <tr key={ele.id}>
    <th scope="row">{ele.id}</th>
    <td>{ele.place}</td>
    <td>{ele.price}</td>
    <td><button className='btn btn-danger' onClick={()=>{handledelete(ele)}}>delete</button> </td>
  </tr>
  })}
    

 
  </tbody>

</table>
<p>total₹{sum}</p>
</div>
  )
}

export default Home
