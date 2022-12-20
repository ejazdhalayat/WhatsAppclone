import React from 'react'

function Entry(props) {
  return (
    <div className='flex justify-center mt-20'>
     <button class="bg-yellow-400 text-black w-60 rounded-full  h-8 " onClick={props.me}>Entry</button>
</div>
)
  
  
}

export default Entry