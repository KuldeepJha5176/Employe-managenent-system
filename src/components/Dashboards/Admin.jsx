import React from 'react'
import Header from '../Structure/Header'

const Admin = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <div>
       <form>
        <h3>Task Tittle</h3>
        <input type='text' placeholder='MAke an UI design'/>
        <h3>Description</h3>
        <textarea name='"' id='"' cols="30" rows="10"></textarea>
        <h3>Date</h3>
        <input type='date' />
        <h3>Assign to</h3>
        <input type='text' placeholder='employee name'/>
        <h3>Category</h3>
        <input type='text' placeholder='design,dev,etc'/>
        <button>Create Task</button>
       </form>
      </div>
    </div>
  )
}

export default Admin
