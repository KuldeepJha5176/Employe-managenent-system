import React, { useState } from 'react'

const Login = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const submitHAndler = (e) =>{
      e.preventDefault()
      console.log("email is",email)
      console.log("password is",password)

      setEmail("");
      setPassword("")
  }
  return (
   <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
          <form 
          onSubmit={(e)=>{
              submitHAndler(e)
          }}
          className='flex flex-col item-center justify-center'>
            <input
              value={email}
              onChange={(e) =>{
                setEmail(e.target.value)
              } }
              required className=' border-2   outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400' type='email' placeholder='Enter your Email'/>        
            <input
              value={password}
              onChange={(e) =>{
                setPassword(e.target.value)
              } }
              required className=' border-2   outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400 mt-3' type='password' placeholder='Enter your password'/>  
            <button className= 'text-white mt-5  border-none outline-none  bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log In</button>      
          </form>
      </div>
   </div>
  )
}

export default Login
