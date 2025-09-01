import React, { useState , useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [username , setUsername] = useState("")
  const [password , setpassword] = useState("")
  
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username , password})
        
  }

  return (
 <>
   <div>login</div> 
   <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} name="username" id="" />
   <input type="password"value={password} onChange={(e)=>{setpassword(e.target.value)}}  name="password" id="" />
   <button onClick={handleSubmit}>Submit</button>

 </>
  )
}

export default Login