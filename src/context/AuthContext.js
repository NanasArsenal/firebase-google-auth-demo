import { useContext,createContext,useEffect,useState } from "react";
import { signOut, signInWithPopup, GoogleAuthProvider ,signInWithRedirect,onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

//creating context 
const AuthContext = createContext()

              //context provider
              export const AuthContextProvider = ({children})=>{
                  const navigate = useNavigate();

                  const [user, setUser] = useState({})  

                  //google sign in funtion
                  const googleSignIn = ()=>{
                      const provider = new GoogleAuthProvider();
                      signInWithPopup(auth,provider)
                  }

                  const logOut = ()=>{
                    signOut(auth)

                  }
                  
                  useEffect(() => {
                    const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{

                      setUser(currentuser);
                      
                    })

                    return ()=>{
                      unsubscribe();
                    }
                  

                  },[])
                  

                  return(
                      <AuthContext.Provider value={{googleSignIn,logOut,user}}> 
                          {children}
                      </AuthContext.Provider>
                  );
              }

              //useable context
              export const UserAuth = () =>{
                  return useContext(AuthContext);
              }