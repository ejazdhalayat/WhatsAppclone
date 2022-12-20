import React from 'react'

function Login(props) {
  return (
    <div>
        <button onClick={()=> props.login()}>Login</button>
    </div>

 
  )
}

export default Login