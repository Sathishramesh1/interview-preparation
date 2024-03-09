import React, { useEffect, useState } from 'react'

export default function Api() {


// useEffect(()=>{

//   const fetchData=async()=>{
//     try {
//       const response=await fetch("https://dog.ceo/api/breeds/list/all");
//       const data= await response.json();
//       console.log(data.message)
//       const filtered=[];

//       for(const key in data.message){
       
//         if(data.message[key])


//       }
      
//     } catch (error) {
//       console.log(error);
      
//     }
//   }
//   fetchData();

// },[])

const [value,setValue]=useState('')
  return (
    <div>
{value}
<div>
  <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
</div>

    </div>
  )
}
