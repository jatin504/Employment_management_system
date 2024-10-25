import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex gap-5 items-center justify-start w-full flex-nowrap py-5 mt-10'>
      <div className='bg-green-400 h-full w-[300px] p-5 rounded-xl flex-shrink-0'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
        <h4 className='text-sm'>10 oct 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a React project</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est velit, ipsam id</p>
      </div>
      <div className='bg-yellow-400 h-full w-[300px] p-5 rounded-xl flex-shrink-0'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
        <h4 className='text-sm'>10 oct 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a React project</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est velit, ipsam id</p>
      </div>
      <div className='bg-red-400 h-full w-[300px] p-5 rounded-xl flex-shrink-0'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
        <h4 className='text-sm'>10 oct 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a React project</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est velit, ipsam id</p>
      </div>
      <div className='bg-blue-400 h-full w-[300px] p-5 rounded-xl flex-shrink-0'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
        <h4 className='text-sm'>10 oct 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a React project</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est velit, ipsam id</p>
      </div>
    </div>
  )
}

export default TaskList
