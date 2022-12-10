import React from 'react'
import ChatScreen from '../Components/ChatScreen'
import ContactList from '../Components/ContactList'


function Homescreen() {
  return (
    <div className=' max-w-[75rem] grid grid-cols-6 h-screen
    bg-indigo-400 mx-auto overflow-y-hidden'>
        {/* ContactList */}
        <ContactList />

        {/* ChatScreen */}
        <ChatScreen />
        </div>
    
    )
}


export default Homescreen