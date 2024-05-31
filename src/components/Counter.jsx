import "../App.css"
import React, { useState } from 'react';

function Counter(){
    const [count, setcount] = useState(0)

    function increment(){
       setcount(count+1)
       if( count <= 50){
        setcount(count+1)
       }
    }

    function decrement(){
        setcount(count-1) 
        if( count == 0){
            setcount(count)
           }
    }


    function reset (){
      setcount(count == 0)
    }
  return (
   <>
   
     <div className="main-box">
        <div className="title">Counter</div>
        <div className="count">{count}</div>
        <div className="btnn"> 
            <button className='increment' onClick={increment}>Increment</button>
            <button className='decrement' onClick={decrement}>Decrement</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
     </div>

   </>
  );
}

export default Counter;
