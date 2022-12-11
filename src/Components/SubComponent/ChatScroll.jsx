import React from 'react'

function Message(props) {
 return (props.me?(     //ternary operation for true and false (props.me?(true):(false))
  <div className='justify-end flex w-full pr-14 '>
    <div className=' bg-green-300 text-black px-2 py-1 rounded-md '>
    {""}
    <p>{props.text}</p>
    </div>
  </div>
 ):(
  <div className=' flex w-full pl-14 '>
    <div className=' bg-white text-black px-2 py-1 rounded-md '>
    {""}
    <p>{props.text}</p>
    </div>
  </div>
 )) 
}

function ChatScroll() {
  return (
    <div className=''>
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hello" me={true} />
       <Message text="Hi" me={false} />
       <Message text="Hello" me={true} />
       <Message text="Hi" me={false} />
       <Message text="Hello" me={true} />
       <Message text="How are you?" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hello" me={true} />
       <Message text="Hi" me={false} />
       <Message text="Hello" me={true} />
       <Message text="Hi" me={false} />
       <Message text="Hello" me={true} />
       <Message text="How are you?" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hello" me={true} />
       <Message text="Hi" me={false} />
       <Message text="Hello" me={true} />
       <Message text="Hi" me={false} />
       <Message text="Hello" me={true} />
       <Message text="How are you?" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hi" me={true} />
       <Message text="Hello" me={false} />
       <Message text="Hello" me={true} />
       <Message text="Hi" me={false} />
       <Message text="Hello" me={true} />
       <Message text="Hi" me={false} />
       <Message text="Hello" me={true} />
       <Message text="9999999"  me={false} />
       <div className='h-10'>

       </div>
    </div>
  )
}

export default ChatScroll