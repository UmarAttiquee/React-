import React, { useState } from "react";

function Calculator() {
 const [num , setNum] = useState("")
 function fun(value)
  {
    
    if(value === 'c')
    {
      setNum("")
    }
    else if(value === '=')
    { 
      const reslt = eval(num)
      setNum(reslt)
    }
    else
    {
      setNum(prev => prev+value)
    }
    
    
  }
  return (
    <>
      <div>
        <h1>Calculator</h1>
        <div>
          <input type="text" id="seachBox" value={num} readOnly />
        </div>
        <div>
          
          
          <button id="btn1" onClick={()=>{fun('1')}}>1</button>
          <button id="btn2" onClick={()=>{fun('2')}}>2</button>
          <button id="btn3" onClick={()=>{fun('3')}}>3</button>
          <button id="btn4" onClick={()=>{fun('4')}}>4</button>
          <button id="btn5" onClick={()=>{fun('5')}}>5</button>
          <button id="btn6" onClick={()=>{fun('6')}}>6</button>
          <button id="btn7" onClick={()=>{fun('7')}}>7</button>
          <button id="btn8" onClick={()=>{fun('8')}}>8</button>
          <button id="btn9" onClick={()=>{fun('9')}}>9</button>
          <button id="btn0" onClick={()=>{fun('0')}}>0</button>
          <button id="btn+" onClick={()=>{fun('+')}}>+</button>
          <button id="btn-" onClick={()=>{fun('-')}}>-</button>
          <button id="btn/" onClick={()=>{fun('/')}}>/</button>
          <button id="btn*" onClick={()=>{fun('*')}}>*</button>
          <button id="btn=" onClick={()=>{fun('=')}}>=</button>
          <button id="btnc" onClick={()=>{fun('c')}}>c</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
