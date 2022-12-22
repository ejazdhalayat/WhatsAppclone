import React from 'react'

function Login(props) {
  return (
    <div className=''>
        {/* <button onClick={()=> props.login()}>Login</button> */}
        <div
        class="max-w-7xl mx-auto   flex justify-center items-center bg-gradient-to-br from-yellow-400 via-red-500 to-purple-400 rounded-md h-screen ">
        <div class="bg-white rounded-md shadow-2xl flex flex-col space-y-4 shadow-rose-400 px-8 py-12">
            <label class="font-bold">Email</label>
            <input class="border-2 rounded-lg border-black" type="email" />
            <label class="font-bold">Password</label>
            <input class="border-2 rounded-lg border-black" type="password" />
            <button class="w-full bg-gradient-to-br from-purple-500 to-yellow-500 text-center rounded-lg my-6 py-2"
                onClick={()=> props.login()}>Login</button>
        </div>
    </div>
    </div>

 
  )
}

export default Login