import React from 'react'

function Card1(props) {
  return (
    <div>
        {/* <button onClick={props.click}>First</button> */}
        <div className='flex items-center justify-center  '>
      <div class="grid grid-cols-1 p-4 mt-10 h-1/4 w-1/4 rounded-lg border-black border-2 ">
        <div>
            <div class=" justify-center flex object-center relative  ">
            <img class="" />
                <img class="rounded-ful h-20 rounded-full absolute left mt-32"
                    src="" />
            </div>
            <div class="justify-center flex object-center mt-10">
                <a class="text-xl font-bold"> </a>

            </div>

            <div class="justify-center flex object-center ">
                <a> </a>
            </div>


            <div class="justify-center flex object-center ">
                <a class=" text-xl font-bold text-cyan-500"></a>

                <a class="ml-20 text-xl font-bold text-cyan-500"><br /></a>
            </div>

            <div class="justify-center flex object-center">
                <a class="text-gray-400 font-xs mr-9  "></a>
                <a class="text-gray-400 font-xs ml-3 "></a>
            </div>

            <div class="justify-center flex object-center mt-72">
                <button class="bg-yellow-400 text-black w-60 rounded-full  h-8" onClick={props.click}>Follow</button>
            </div>

            <div class="justify-center flex object-center mt-4">
                <a class="">
                </a>
            </div>




        </div>

    </div>
    </div>
    </div>
   
  )
}

export default Card1