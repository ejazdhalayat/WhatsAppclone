import React from 'react'
import ChatHead from './ChatHead'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function ChatScreen(props) {
  return (
    <div className='bg-blue-600 relative col-span-4 h-screen'>
        <div className='bg-gray-300 w-full absolute z-10 top-0'>
          <ChatHead p2={props.p1} />
        </div>
        <div className='bg-white pt-16 h-full overflow-y-scroll'>
          <ChatMessage />
          </div>
        <div className='bg-sky-300 w-full  absolute bottom-0'>
          <ChatInput />
          </div>

      </div>
  )
}

export default ChatScreen