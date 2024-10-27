import React from 'react'
import Header from '../Structure/Header'
import Tasklistnumber from '../Structure/Tasklistnumber'
import TaskList from '../TaskList/TaskList'

const Employee = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      < Header />
      <Tasklistnumber/>
      <TaskList/>
    </div>
  )
}

export default Employee
