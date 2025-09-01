import React, { useState } from 'react'

function Counter() {
  
  const [counter , setCounter] = useState(0)
  function funadd()
  {
    
    if(counter<20)
    {
       setCounter(prev => prev+1)
    }
  }

  function funmin()
  {
      if(counter>0){
       setCounter(prev => prev-1)
  }
}

  return (
  <>
   <div>
        <h1 id="counter">Counter {counter}</h1>
        <button id="btn+" onClick={funadd}> +</button>
        <button id="btn-" onClick={funmin}> -</button>
   </div>
  </>

  )
}

export default Counter