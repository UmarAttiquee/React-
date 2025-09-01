import React from 'react'
import { useParams } from 'react-router-dom'


function UserName() {
const {id} = useParams()

  return (
    <div>UserName:  {id}</div>
  )
}

export default UserName