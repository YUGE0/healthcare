import React from 'react'
import './App.css'
import DashbordMain from './components/DashbordMain'
import Header from './components/header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
    <Header/>
    <div className='flex bg-[#F5F9FF]'>
      <Sidebar/>
      <DashbordMain/>
    </div>
    </>
  )
}

export default App
