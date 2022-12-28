
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/SubComponent/Login';
import Homescreen from './Screens/Homescreen';
import app from './firebase';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import Loader from './Screens/Loader'


function App() {
 

  const auth = getAuth(app); // auth object ref
  const provider = new GoogleAuthProvider(); //provider or thirdparty to perform
  const db = getFirestore(app); // reference to our db in project
  const[user, setUser] = useState(false); // user variable which is the only variable to contain and check incase of any action (main user value is set here)
  const [load, setLoad] = useState(true)
////// sideEffect to create a data object for newly signed in users //////

  useEffect(()=>{
    if (!user) return; // if user is not present leave the scope
    checkNewLogin(); // if user is there then run this function
  },[user]) // re runs the useeffect everytime user value is changes
  
/////////////////////


//CheckLogin
async function checkNewLogin(){
const docRef = doc(db, "users", user?.uid);
const docSnap = await getDoc(docRef);

if (!docSnap.exists()) {
  await setDoc(doc(db, "users", user?.uid), user);
  // console.log("Document data:", docSnap.data());
} 
}




//signin
async function Signin() {
 await  signInWithPopup(auth, provider)
  .then((result) => {
    const data = result.user;
    const {displayName ,email ,photoUrl ,uid } = result.user;
    setUser({"displayname" : displayName ,"email" :email ,"photoUrl" : photoUrl ,"uid" : uid});
    console.log(displayName ,email ,photoUrl ,uid);
   }).catch((error) => {
    console.log(error)
    
  });
}





useEffect(onAuthStateChanged(auth, (u) => {
  if (u) {
    const {displayName,email,photoURL,uid} = u
    setUser({"displayName":displayName,"email":email,"photoURL":photoURL,"uid":uid});
  } else {
    setUser(null)
  }
}),[])

//Logout
async function Signout() {
  await signOut(auth).then((er)=>{console.log(er)}).catch((errr)=>{console.log(errr)})
}
//Loader

setTimeout(()=>{
setLoad(false)
}, 2000 )

  if (load) return <Loader /> ;




  // const[btn, setBtn] = useState(null)
  return (
    <div className="h-screen w-screen " >
      {user ? <Homescreen user={user} logout={Signout} /> : <Login login={Signin}/>}
    </div>
  );
}

export default App;
