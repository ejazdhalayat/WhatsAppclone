
import { useState } from 'react';
import './App.css';
import Login from './Components/SubComponent/Login';

import Homescreen from './Screens/Homescreen';


function App() {
  const[user, setUser] = useState(null)
  return (
    <div className="h-screen w-screen " >
      {user ? <Homescreen /> : <Login login={setUser}/>}

      {/* <Homescreen /> */}

      {/* <Classscreen /> */}

     
    </div>
  );
}

export default App;
