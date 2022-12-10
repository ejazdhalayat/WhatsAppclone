import React from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function ChatHead() {
  return (
    <div>
          <div className='flex justify-between p-2 px-4 items-center
       bg-slate-700 '>
        <div className='flex items-center space-x-3'>
        <img className='rounded-full h-[37px] w-[37px]' alt='' src='https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdQ1yNbSZqdVKcnMgMRJIHB1Ir-EPaz0J7QmOLxRvme0eg&oe=639896B0' />
        <div>
            <p className='text-gray-300 font-semibold text-lg leading-3'>Arfat</p>
            <p className='text-gray-300 font-semibold text-xs'>Online</p>
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