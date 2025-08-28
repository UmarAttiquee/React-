import { useState } from "react";


function Counter() {
  let [counter , setCounter] = useState(15)
 
  const fun = ()=>{
    let a = counter
    if(a>20)
    {
       setCounter(counter = 20) 
    return;
    }
    else
    {
      setCounter((preCounter) => preCounter+1)
      setCounter((preCounter) => preCounter+1)
      setCounter((preCounter) => preCounter+1)
      setCounter((preCounter) => preCounter+1)
    }
     
  }

  const fun1 = () =>{
     let a = counter
    if(a<0)
    {
       setCounter(counter = 0) 
    return;
    }
    else
    {setCounter(counter--)}
  }

  return (
    <>
      <h1>Counter value is :- {counter}</h1>
      <button onClick={fun}>Add</button>
      <button onClick={fun1}>Sub</button>
    </>
  );
}

export default Counter;
