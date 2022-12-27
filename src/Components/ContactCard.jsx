import React from 'react'

function ContactCard({showImg ,showName, ...props }) { //we can give any parameter. Developers call props in react
//   console.log(props)
    return (
    <div className=' text-gray-500 border-slate-700 group cursor-pointer hover:bg-gradient-to-tr from-purple-500 to-yellow-400 border-y py-3 text-sm'>
        <div className=' flex justify-between mx-4'>
            <div className='flex space-x-2 items-center'>
            <img className='rounded-full h-9 w-9' 
            src={showImg} />

                <div>
                    <p className='text-white group-hover:font-bold group-hover:text-black text-base'>{showName}</p>

                    
                    <p className='text-gray-400 group-hover:text-black text-sm'>{showMsg}</p>

                </div>

               

            </div>

            <div>
                <p className='text-xs'>12:00</p>
            </div>

        </div>

    </div>
  )
}

export default ContactCard