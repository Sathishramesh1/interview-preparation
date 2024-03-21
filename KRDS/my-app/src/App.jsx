import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isHoverd,setHovered]=useState(false);


  useEffect(()=>{
   if(isHoverd){
    setCount(count+1);
   }


  },[isHoverd])

  return (
    <>
    <h21>react app</h21>
     <h1>Count:{count}</h1>
    <div>
      <button 
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      >Hover me</button>
     </div> 

    
         
         
          </>
  )
}

export default App
