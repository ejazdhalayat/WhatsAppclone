import React, { useState } from 'react'

function Cards() {
const [data, setData] = useState({fo:"?", fl:"?",name:""})

  return (
    <div className='flex items-center justify-center  '>
      <div class="grid grid-cols-1 p-4 mt-10 h-1/4 w-1/4 rounded-lg border-black border-2 bg-pink-300 ">
        <div className='border-2 border-black rounded-2xl bg-white'>
            <div class=" justify-center flex object-center relative  ">
            <img class="w-full rounded-t-2xl h-44" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/
            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" />
                <img class="rounded-ful h-20 rounded-full absolute left mt-32"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_c3bLiMDSW4uVv5dmgCH82RmeR6R2sAE-AQ&usqp=CAU" />
            </div>
            <div class="justify-center flex object-center mt-10">
                <a class="text-xl font-bold">{data.name}</a>

            </div>

            <div class="justify-center flex object-center ">
                <a>Ant Collector</a>
            </div>


            <div class="justify-center flex object-center ">
                <a class=" text-xl font-bold text-cyan-500">{data.fo}</a>

                <a class="ml-20 text-xl font-bold text-cyan-500">{data.fl}<br /></a>
            </div>

            <div class="justify-center flex object-center">
                <a class="text-gray-400 font-xs mr-9  " >follower</a>
                <a class="text-gray-400 font-xs ml-3 ">following</a>
            </div>

            <div class="justify-center flex object-center mt-8">
                <button class="bg-yellow-400 text-black w-60 rounded-full  h-8" onClick={() =>setData({fo:"100", fl:"100",name:"Morgan"})}>Follow</button>
            </div>

            <div class="justify-center flex object-center mt-4">
                <a class="ml-5 ">Morgan has collected ants since they were six years old and now has many dozen
                    ants but none in their pants.
                </a>
            </div>




        </div>

    </div>
    </div>
  )
}

export default Cards