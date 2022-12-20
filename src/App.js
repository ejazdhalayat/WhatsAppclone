
// import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/SubComponent/Login';
import Homescreen from './Screens/Homescreen';
import app from './firebase';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { async } from '@firebase/util';

function App() {
  const[user, setUser] = useState(null)
const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

async function Signin() {
 await  signInWithPopup(auth, provider)
  .then((result) => {
    const data = result.user;
    setUser(data);
   }).catch((error) => {
    console.log(error)
    setUser(null) 
  });
}
async function Signout() {
  await signOut(auth).then(()=>{}).catch(()=>{})
}

// useEffect(()=>{
//   onAuthStateChanged(auth, (u) => {
//     if (u) {
//       setUser(u)
//     } else {
//       setUser(null)
//     }
//   });

// },[user])



  // const[btn, setBtn] = useState(null)
  return (
    <div className="h-screen w-screen " >
      {user ? <Homescreen user={user} logout={Signout} /> : <Login login={Signin}/>}
      
   

     
    </div>
  );
}

export default App;
