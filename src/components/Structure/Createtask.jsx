import React from 'react'

const Createtask = () => {
  return (
   
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
       <form className='flex flex-wrap w-full items-start justify-between '>
        <div className='w-1/2'>
            <div>
              <h3 className='text-sm text-grey-300 mb-0.5'>Task Tittle</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type='text' placeholder='MAke an UI design'/>
              </div>
              
            <div>
              <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  type='date' />
              </div>
            <div>
              <h3 className='text-sm text-grey-300 mb-0.5'>Assign to</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  type='text' placeholder='employee name'/>
              </div>
            <div>
              <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  type='text' placeholder='design,dev,etc'/>
              </div>
              </div> 
            <div>
          <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
          <textarea className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'   name='"' id='"' cols="30" rows="10"></textarea>
          <button className='bg bg-emerald-500 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>
        </form>
        </div>
    
  )
}

export default Createtask
