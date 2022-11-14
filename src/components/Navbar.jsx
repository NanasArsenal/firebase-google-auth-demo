import {React,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const {user,logOut} = UserAuth();
  console.log(user)

  let navigate = useNavigate();

  const userSignOut = async ()=>{
   try {
    logOut();
   
   } catch (error) {
    console.log(error)
   }
  }

  useEffect(() => {
    if(user === null){
       navigate('/signin')
    }
  
   
  }, [user])
  


  return (
    <div className='h-[50px] bg-slate-700  flex justify-between px-[60px] items-center align-middle '>
      <h1 className=' text-white'>Google Auth with Firebase</h1>

     {user?<button onClick={userSignOut}  className='text-white'>LogOut</button> : <Link to={'/signin'} className=' text-white'>Sign In</Link>}
      
    </div>
  )
}

export default Navbar