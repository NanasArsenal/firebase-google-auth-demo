import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Home from '../pages/Home';

const Protected = ({children}) => {
    const {user} = UserAuth();

    if(!user){
        return <Home/>
    }
  return (
    <div>{children}</div>
  )
}

export default Protected