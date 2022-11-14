import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Home = () => {
  const {user} = UserAuth();

  let currentuser = user;

  if(currentuser === null){
    currentuser = '';
  }

 

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-[50px] '>Home</h1>

     
      <Link to={'/account'}>
       <div className=' border border-slate-600 w-[500px] '>
        Welcome <p>{currentuser !== null ? currentuser.displayName : '' }</p>
        Go to Account details
       </div>
      </Link>
    </div>
  )
}

export default Home