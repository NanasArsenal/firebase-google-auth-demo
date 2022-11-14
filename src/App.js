import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Account from './pages/Account'
import Signin from './pages/Signin'
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './Protected/Protected';



function App() {
  return (
   
      <div className="App">
        <AuthContextProvider>
            <Navbar></Navbar>
            <Routes>
              <Route  path='/' element={<Home/>}></Route>

              <Route  path='/account' element={
              <Protected>
                <Account/>
              </Protected>
              }></Route>
              <Route  path='/signin' element={<Signin/>}></Route>
            </Routes>
         </AuthContextProvider>
      </div>
    

  );
}

export default App;
