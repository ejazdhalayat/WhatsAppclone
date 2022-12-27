import React from 'react'
import { collection, onSnapshot } from "firebase/firestore";

function Message({data , me}) {
 return (<div>                                  //ternary operation for true and false 
 {me ? <div className='justify-end flex w-full pr-14 '>
    <div className='max-w-max rounded-br-none px-4 py-2 rounded-lg bg-slate-800 text-gray-200 '>
    
    <p>{data.myMessage}</p>
    </div>
  </div>:<div className=' flex w-full pl-14 '>
  <img src={data.img} className="rounded-full h-8 w-8" />
    <div className=' bg-white text-black px-2 py-1 rounded-md '>
   
    <p>{data.myMessage}</p>
    </div>
  </div>}
  </div>)
  
}

function ChatScroll({user, db, ...prop}) {
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