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
 
      <p>{user.displayName} </p>
      <button className='border border-slate-900 px-2' onClick={handleLogout}>Logout</button>
    </div>
    
  )
}

export default Account