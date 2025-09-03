import React, { useState } from 'react'
import { addData } from '../features/TodoSlice'
import { useDispatch } from 'react-redux';
   
function AddData() {
 const [data , setData] = useState('')
  const dispatch = useDispatch()
  function handle (e)
  {
    e.preventDefault()
    dispatch(addData(data))
    setData("")
  }
  return (
        <>
             <form onSubmit={handle} action="">
              <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}} />
              <button type='submit'>Submit</button>
             </form>
        </>
        )
                }

export default AddData