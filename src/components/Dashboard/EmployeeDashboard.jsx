import React from 'react'
import Header from '../others/Header'
import TextNumCard from '../others/TextNumCard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TextNumCard/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
