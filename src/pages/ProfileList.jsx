import React from 'react'
import { Link } from "react-router-dom"

function ProfileList() {
  return (
    <div>
    
      Perfil 1: Caro
      <Link to="/profile/caro">Ver más de Caro</Link>

      <hr />

      Perfil 2: Eva
      <Link to="/profile/eva">Ver más de Eva</Link>
    
    </div>
  )
}

export default ProfileList