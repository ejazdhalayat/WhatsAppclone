import React from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function ChatHead(props) {
  return (
    <div>
          <div className='flex justify-between p-2 px-4 items-center
       bg-slate-700 '>
        <div className='flex items-center space-x-3'>
        <img className='rounded-full h-10 w-10' alt='' src={props.p2?.img} />
        <div>
            <p className='text-gray-300 font-semibold text-lg '>{props.p2?.name}</p>
            <p className='text-gray-300 font-semibold text-xs leading-3'>Online</p>
        </div>

        </div>

        <div className='flex text-gray-300 text-lg space-x-3'>
        <SearchIcon fontSize='inherit' />
        <MoreVertIcon fontSize='inherit' />
        </div>

      </div>
    </div>
  )
}

export default ChatHead