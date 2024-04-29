
import React, { useState } from 'react'



function useTicTacToe({n}) {
    const initialBoard=()=>Array(n*n).fill(null);
    const [board,setBoard]=useState(initialBoard());
    const [isXNext,setXNext]=useState(true);

    function winningPatten(n) {
        const patterns = [];
    
        // Rows
        for (let i = 0; i < n; i++) {
            const rowPattern = [];
            for (let j = 0; j < n; j++) {
                rowPattern.push(i * n + j);
            }
            patterns.push(rowPattern);
        }
    
        // Columns
        for (let i = 0; i < n; i++) {
            const colPattern = [];
            for (let j = 0; j < n; j++) {
                colPattern.push(j * n + i);
            }
            patterns.push(colPattern);
        }
    
    
        const diagonal1 = [];
        for (let i = 0; i < n; i++) {
            diagonal1.push(i * n + i);
        }
        patterns.push(diagonal1);
    
       
        const diagonal2 = [];
        for (let i = 0; i < n; i++) {
            diagonal2.push(i * n + (n - 1 - i));
        }
        patterns.push(diagonal2);
    
        return patterns;
    }
    
  
    const patterns=winningPatten(n);
    // console.log(patterns)

    const calculateWinner=(current)=>{

        for(let i=0;i<patterns.length;i++){
        const [a,b,c]=patterns[i];
            
    
        if(
            current[a]
            &&current[a]==current[c]
            && current[a]==current[b]
        
        ){
            return current[a];
        }

        }

        return null
    }

    const handelClick=(index)=>{

        const winner=calculateWinner(board);
        console.log(winner)
        if(winner || board[index]) return

        const updatdBoard=[...board];
        updatdBoard[index]=isXNext?"X":"O";
        setBoard(updatdBoard);
        setXNext(!isXNext);

    }
    const getStatusMessage=()=>{
     const winner=calculateWinner(board);

     if(winner){
        return `${winner} wins the game`
     }


     return isXNext?"X turn":"O turn"
    }
    const resetGame=()=>{
        setBoard(initialBoard());
        setXNext(true);

    }


  return {
    board,handelClick,calculateWinner,getStatusMessage,resetGame

  }
}

export default useTicTacToe