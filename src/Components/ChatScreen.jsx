import React from 'react'
import ChatHead from './ChatHead'

function ChatScreen() {
  return (
    <div className='bg-blue-600 relative col-span-4 h-screen'>
        <div className='bg-gray-300 w-full absolute z-10 top-0 '>
          <ChatHead />
        </div>
        <div className='bg-purple-600 pt-16 h-full'>ChatScreen</div>
        <div className='bg-sky-300 w-full  absolute bottom-0'>KeyBoard</div>

      </div>
  )
}

export default ChatScreen