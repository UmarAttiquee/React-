import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Sign() {
  
  const {user} = useContext(UserContext)
  if(!user)
  {
    return <h2>Login Please</h2>
  }
  
  return (
   <>
      <h1>UserName: {user.username}</h1>
      <h2>Password: {user.password}</h2>
   </>
  )
}

export default Sign