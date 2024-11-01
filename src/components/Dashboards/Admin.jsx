import React from 'react'
import Header from '../Structure/Header'
import Createtask from '../Structure/Createtask'

const Admin = () => {
  return (
    <div className='h-screen w-full p-7'>
      <Header/>
      <Createtask/>
    </div>
  )
}

export default Admin
