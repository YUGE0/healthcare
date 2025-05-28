import React from 'react'
import logo from '/healthcare_logo.svg'
const Header: React.FC = () => {
  return (
    <div className='bg-none p-8 md:p-10 md:py-16 top-5 flex gap-5 md:h-10 items-end md:items-center bg-[#F5F9FF]'>  
      <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-12 w-2/3'>
        <img className='left-0 h-10' src={logo} alt=""/>
        <div className='w-full flex items-center gap-3'>
          <div className='w-4/5 px-3 p-2 flex gap-3 items-center rounded-xl border shadow-[#8d929e]/50 shadow-xs border-[#8d929e]/30'>
              <img className='p-1 h-7' src="./search.svg"/>
              <h4 className='text-xl font-semibold text-[#8d929e]'>Search</h4>
          </div>
          <span className='border shadow-[#8d929e]/50 shadow-xs rounded-xl border-[#8d929e]/30 p-2'>
            <img className='h-7' src="./notification.svg"/>
          </span>
        </div>
      </div>
      <div className='flex items-center gap-3 w-2/6 justify-end mr-10'>
        <span className='w-10 h-10 rounded-lg bg-[#1ADDED]'>
          <img className='p-1' src="./avtar.svg"/>
        </span>
        <span className='w-10 h-10 rounded-lg bg-[#36339F]'>
          <img className='p-1' src="./addicon.svg"/>
        </span>
      </div>
    </div>
  )
}

export default Header
