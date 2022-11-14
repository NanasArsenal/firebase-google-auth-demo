import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
  const {user,logOut} = UserAuth()
  
  const handleLogout = async ()=>{
    try {
      logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
 
    
      <button onClick={handleLogout}>Logout</button>
    </div>
    
  )
}

export default Account