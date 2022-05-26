import React from 'react'
import { useParams } from "react-router-dom"

function Profile() {

  const params = useParams()
  console.log(params)
  const { name } = params
  // const { name } = useParams()

  return (
    <div>
    
      <h2>Perfil de: {name} </h2>

    </div>
  )
}

export default Profile