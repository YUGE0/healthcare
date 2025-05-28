import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <div className='hidden lg:block px-10 pb-10'>
        <div>
            <h1 className='text-xl font-normal text-[#D3D6DC]'>General</h1>
            <div>
                <button className='flex items-center gap-4 py-4'>
                    <img className='w-8' src='./dashboardicon.svg'/>
                    <h2 className='text-xl text-[#2F3299] font-semibold'>Dashbord</h2>
                </button>
                <button className='flex opacity-60 items-center gap-4 py-4'>
                    <img className='w-8 opacity-30' src='./history.svg'/>
                    <h2 className='text-xl text-[#5F6277] font-semibold'>History</h2>
                </button>
                <button className='flex opacity-60 items-center gap-4 py-4'>
                    <img className='w-8' src='./calender.svg'/>
                    <h2 className='text-xl text-[#5F6277] font-semibold'>Calender</h2>
                </button>
                <button className='flex opacity-60 items-center gap-4 py-4'>
                    <img className='w-8' src='./appointments.svg'/>
                    <h2 className='text-xl text-[#5F6277] font-semibold'>Appointments</h2>
                </button>
                <button className='flex opacity-60 items-center gap-4 py-4'>
                    <img className='w-8' src='./statistic.svg'/>
                    <h2 className='text-xl text-[#5F6277] font-semibold'>Statistic</h2>
                </button>
            </div>
        </div>
        <div className='pt-10'>
            <h1 className='text-xl font-normal text-[#D3D6DC]'>Tools</h1>
            <button className='flex opacity-60 items-center gap-4 py-4'>
                <img className='w-7' src='./chat.svg'/>
                <h2 className='text-xl text-[#5F6277] font-semibold'>Chat</h2>
            </button>
            <button className='flex opacity-60 items-center gap-4 py-4'>
                <img className='w-7' src='./support.svg'/>
                <h2 className='text-xl text-[#5F6277] font-semibold'>Support</h2>
            </button>
        </div>
        <button className='mt-64 flex opacity-60 items-center gap-4 py-4 '>
            <img className='w-8' src='./setting.svg'/>
            <h2 className='text-xl text-[#5F6277] font-semibold'>Setting</h2>
        </button>
    </div>
  )
}

export default Sidebar
