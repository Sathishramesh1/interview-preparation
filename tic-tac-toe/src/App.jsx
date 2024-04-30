import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './Components/TicTacToe'



function App() {
 
  return (
    <>
    <h1>
    TicTacToe
    </h1>
      <TicTacToe n={4}/>
     
    </>
  )
}

export default App
