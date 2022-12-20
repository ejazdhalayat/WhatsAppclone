import React, { useState } from 'react'
import ChatScreen from '../Components/ChatScreen'
import ContactList from '../Components/ContactList'

import Index from './Index'


function Homescreen() {
  const [active, setActive] = useState(null)


  return (
    <div className=' max-w-[75rem] grid grid-cols-6 h-screen
    bg-indigo-400 mx-auto overflow-y-hidden'>
        {/* ContactList */}
        <ContactList setContact={setActive}/>

        {/* ChatScreen */}
        {/* {active?<ChatScreen p1={active} /> : ""} */}
        <Index />
        </div>
    
    )
}


export default Homescreen