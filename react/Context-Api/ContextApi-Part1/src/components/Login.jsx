import React, { useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
  
  const {setUser} = useContext(UserContext)
   const [username , setUserName] = useState('')
   const [password , setpassword] = useState('')
  function handle(e)
  {
    e.preventDefault()
    setUser({username , password})
  }
  
  return (
    <>
    <input type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}}  placeholder='Enter Name' />
    <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}}  placeholder='Enter Password'/>
    <button onClick={handle}>Submit</button>
    </>
  )
}

export default Login