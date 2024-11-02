import React from 'react'
import Header from '../Structure/Header'
import Createtask from '../Structure/Createtask'
import Alltask from '../Structure/Alltask'

const Admin = () => {
  return (
    <div className='h-screen w-full p-7'>
      <div >
        <Header/>
        <Createtask/>
        <Alltask/>
      </div>
     
    </div>
  )
}

export default Admin
