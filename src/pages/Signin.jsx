import{ React , useEffect}from 'react';
import {GoogleButton} from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  //destructuring the google signin method from the UserAuth context 
    const navigate = useNavigate()

    const {user,googleSignIn}= UserAuth();

 const handleGoogleSignIn = async ()=>{
  try {
    await googleSignIn()
      
  } catch (error) {
    console.error(error)
  }
 }
 
 useEffect(() => {
  if(user != null){
    navigate('/account')
  } 
 }, [user]);

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Sign In</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  )
}

export default Signin