import React from 'react'
import ChatHead from './SubComponent/ChatHead'
import ChatInput from './SubComponent/ChatInput'
import ChatScroll from './SubComponent/ChatScroll'

function ChatScreen(props) {
  return (
    <div className='bg-blue-600 relative col-span-4 h-screen'>
        <div className='bg-gray-300 w-full absolute z-10 top-0'>
          <ChatHead p2={props.p1} />
        </div>
        <div className="bg-[url('https://st2.depositphotos.com/1963019/9464/v/450/depositphotos_94649040-stock-illustration-vector-doodle-seamless-pattern-with.jpg')]  pt-16 h-full overflow-y-scroll">
          <ChatScroll />
          </div>
        <div className='bg-white w-full  absolute bottom-0'>
          <ChatInput />
          </div>

      </div>
  )
}

export default ChatScreen