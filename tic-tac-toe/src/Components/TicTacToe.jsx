import React from 'react'
import useTicTacToe from '../custom-hook/useTicTacToe'

function TicTacToe({n}) {
   const{ board,resetGame,handelClick,getStatusMessage}=useTicTacToe({n});

  return (

        <div className='game'>
      <div className='status'>
      
      {getStatusMessage()}
     {console.log(board)}

      <button onClick={()=>resetGame()}>reset</button>

      </div>
      <div className='board' style={{ '--n': n }}>
      {board.map((ele,i)=> <button className='cel' key={i} onClick={()=>handelClick(i)}
      disabled={ele!==null}
      >{ele}</button>)}

      </div>
             


        </div>


  )
}

export default TicTacToe