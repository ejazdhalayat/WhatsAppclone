import React, { useState } from 'react'
import ChatScreen from '../Components/ChatScreen'
import ContactList from '../Components/ContactList'

// import Index from './Index'


function Homescreen({user, db, logout}) {
  const [active, setActive] = useState(null)


  return (
    <div className=' max-w-[75rem] grid grid-cols-6 h-screen
    bg-indigo-400 mx-auto overflow-y-hidden'>
        {/* ContactList */}
        <ContactList user={user} db={db} logout={logout} setContact={setActive} />

        {/* ChatScreen */}
         {/* Message Box */}
            {/* <ChatScreen p1={active} />  */}
            {/* Boolean operation true & true is always true  , true & false is always false */}
        {active?<ChatScreen db={db} p1={active} user={user} /> :  <div className=' flex justify-center items-center col-span-4 w-full'>
            {/* <p className=' font-black text-7xl text-gray-400'>welcome</p> */}
            <img className='h-screen' src='https://www.snowpack.dev/img/guides/react/react.gif' />
          </div>}
        {/* <Index /> */}
        </div>
    
    )
}


export default Homescreen