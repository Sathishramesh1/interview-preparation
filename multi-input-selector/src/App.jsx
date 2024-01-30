import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Pill from './Pill';


function App() {

const [search, setsearch] = useState('');
const [selected,setSelected]=useState([])
const [suggestion, setsuggestion] = useState([] );

const [selectedUser, setselectedUser] = useState(new Set());
const input=useRef(null);



const handleClick=(user)=>{

   setSelected([...selected,user]);
   input.current.focus()
   setsuggestion([]);
   setselectedUser(new Set([...selectedUser,user.email]));
   
   setsearch('');
}


const handleRemove=(user)=>{
const filteredUsers=selected.filter((selectedUsers)=>selectedUsers.id!=user.id);
console.log(user)
setSelected([...filteredUsers]);
}

const handleKeyDown=(e)=>{

  if(e.key=='Backspace' && e.target.value=='' && selected.length>0){
    const lastUser=selected[selected.length-1];
    handleRemove(lastUser);
    selectedUser.delete(lastUser)
  }
}
  

useEffect(()=>{
 // debounce function
 const debounceSearch = setTimeout(() => {
  async function fetchData() {
    try {
      if (search.trim() !== '') {
        const data = await fetch(`https://dummyjson.com/users/search?q=${search}`);
        const response = await data.json();
        setsuggestion([...response.users]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
}, 300); 

// Cleanup function 
return () => clearTimeout(debounceSearch);


},[search])


  return (
    <div className='search-input-container'>
    <h3>Multi Input Selector with custom debouncing to reduce API loads</h3>
      <div className='search-input'>
      {selected?.map((ele)=>{
       return  (<Pill key={ele.email} name={ele.firstName} onClick={()=>handleRemove(ele)} image={ele.image}/>)
      })}
      <div>
        <input type='text'
        ref={input}
          value={search}
          placeholder='search user'
          onChange={(e)=>setsearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
          <ul className='suggestion-list'>
      {suggestion?.map((user)=>{
       
        return !selectedUser.has(user.email)? (<li key={user.email} onClick={()=>handleClick(user)}>
          <img src={user.image}/>
          <span>{user.firstName}</span>
        </li>):(<span></span>)
       
      })}
      </ul>
      
      </div>
      </div>
     
      
    </div>
  )
}

export default App