import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';


function ChatInput() {
  //console.log(props.msgSetter)

  const schema = {
    uid : 'arfat1234' ,
    myMessage : "" ,
  }

  const [text, setText] = useState(schema)

  function handleChange(event){
    const value = event.target.value ;
    setText({uid : '12345', myMessage : value})
  }

  return (
    <div className='flex space-x-2 text-xl mt-3 ml-3 mr-3'>
    <InsertEmoticonIcon fontSize='inherit'/>
    <AttachFileIcon fontSize='inherit' className='rotate-45'/>
    <input placeholder='Search or start a new chat' className='w-full bg-transparent text-base'></input>
    <MicIcon fontSize='inherit'/>
    </div>
  )
}

export default ChatInput