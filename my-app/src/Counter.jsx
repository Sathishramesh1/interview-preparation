import React, { useEffect, useReducer, useRef, useState } from 'react'
import './App.css'

function Counter() {


   const [state,setState]=useState({
    1:{value:1,condition:false},
    2:{value:2,condition:false},
    3:{value:3,condition:false},
    4:{value:4,condition:false},
    5:{value:5,condition:false},
    6:{value:6,condition:false},
    7:{value:7,condition:false},
   

 });

 const ref=useRef([]);

  
  
  const handleClick = (event) => {
    const number=parseInt(event.target.dataset.value);
  // console.log(number)
    
     setState(prevState => ({
      ...prevState,
      [number]: {
          ...prevState[number],
          condition: true
      }
  }));
  
   
   ref.current.push(number)
   
  
    }
  
    

    useEffect(() => {
      console.log(ref.current);
      if (ref.current.length === 7) {
       ref.current.forEach((ele,i)=>{
         
       const timer=  setTimeout(() => {
          setState(prevState => ({
            ...prevState,
            [ele]: {
                ...prevState[ele],
                condition: false
            }
        }));

         
         ref.current = ref.current.filter(item => item !== ele);
         }, (i+1)*1000);
  
   return () => {
    clearTimeout(timer);
    
   }
       })
              }

      
    }, [ref.current.length]);
    

  return (
    <div>
    
    {/* <h1>When all element are clicked it reset in Clicking order</h1> */}
    <div className='c-section' >
    <div className='first-row'>
      <span data-value="1" className={state[1].condition ? 'active' : ''} onClick={handleClick}>{state[1].value}</span>
      <span data-value="2" className={state[2].condition ? 'active' : ''} 
      onClick={handleClick}
      >{state[2].value}</span>
      <span data-value="3" onClick={handleClick} className={state[3].condition ? 'active' : ''} >{state[3].value}</span>
    </div>
    <div className='second-row'>
      <span data-value="4" className={state[4].condition ? 'active' : ''} 
      onClick={handleClick}
      >{state[4].value}</span>
    </div>
    <div className='third-row'>
    <span data-value="5" className={state[5].condition ? 'active' : ''} 
    onClick={handleClick}>{state[5].value}</span>
      <span data-value="6" className={state[6].condition ? 'active' : ''}
      onClick={handleClick}
       >{state[6].value}</span>
      <span data-value="7" className={state[7].condition ? 'active' : ''} 
      onClick={handleClick}>{state[7].value}</span>
</div>
    </div>
    
    
    
    
    </div>
  )
  }

export default Counter