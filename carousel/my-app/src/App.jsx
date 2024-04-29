import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const data = [
    { imageUrl: "https://picsum.photos/200/300" },
    { imageUrl: "https://source.unsplash.com/random/400x600" },
    { imageUrl: "https://placekitten.com/300/200" },
    { imageUrl: "https://loremflickr.com/320/240" },
    { imageUrl: "https://www.fillmurray.com/200/300" }
  ];
  
  console.log(data);
  


  const [count, setCount] = useState(0)



  useEffect(()=>{

    const timer = setInterval(() => {
      setCount(prevCount => (prevCount + 1) % data.length); // Increment count cyclically
    }, 1000);

return ()=>{
  clearInterval(timer);
}


  },[count])



  
  return (
    <>
    <h1>hello world</h1>
    
    <div>

     <img src={data[count].imageUrl}/>

    </div>
    

      
      
          </>
  )
}

export default App
