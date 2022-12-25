
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/SubComponent/Login';
import Homescreen from './Screens/Homescreen';
import app from './firebase';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import Loader from './Screens/Loader'


function App() {
  const[user, setUser] = useState(null)

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);


  useEffect(()=>{
    if (!user) return;
    checkNewLogin();
  },[user])



//CheckLogin
async function checkNewLogin(){
const docRef = doc(db, "users", user?.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
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
    setUser(null) 
  });
}

//Logout
async function Signout() {
  await signOut(auth)
  .then(()=>{})

  .catch(()=>{})
}



useEffect(()=>{
  onAuthStateChanged(auth, (u) => {
    if (u) {
      const {displayName ,email ,photoUrl ,uid } = u;
    setUser({"displayname" : displayName ,"email" :email ,"photoUrl" : photoUrl ,"uid" : uid});
    console.log(displayName ,email ,photoUrl ,uid)
      
    } else {
      setUser(null)
    }
  });

},[user])


//Loader
const [init ,setInit] = useState(true) ;
setTimeout(function(){
setInit(false)
}, 2000 )

  if (init) return <Loader /> ;




  // const[btn, setBtn] = useState(null)
  return (
    <div className="h-screen w-screen " >
      {user ? <Homescreen user={user} logout={Signout} /> : <Login login={Signin}/>}
    </div>
  );
}

export default App;
