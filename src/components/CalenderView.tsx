import React from 'react'

const CalenderView: React.FC = () => {
  return (
    <div className='grid grid-cols-7 justify-items-start w-full'>
        <div className='lg:pr-1 xl:pr-3 py-2'>
            <h1 className='text-center px-1 md:px-2 text-lg font-semibold'>Mon</h1>
            <h1 className='text-center px-1 md:px-2 py-1 text-3xl font-bold'>25</h1>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>10:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>11:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>12:00</h2>
        </div>          
        <div className='rounded-xl lg:px-1 xl:px-3 py-2 bg-[#8d929e]/10'>
            <h1 className='text-center px-1 md:px-2 text-lg font-semibold'>Tues</h1>
            <h1 className='text-center px-1 md:px-2 py-1 text-3xl font-bold'>26</h1>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>08:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold rounded-xl bg-[#2F3299] text-white'>09:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>10:00</h2>
        </div>          
        <div className='lg:px-1 xl:px-3 py-2'>
            <h1 className='text-center px-1 md:px-2 text-lg font-semibold'>Wed</h1>
            <h1 className='text-center px-1 md:px-2 py-1 text-3xl font-bold'>27</h1>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>12:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>-----</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>13:00</h2>
        </div>          
        <div className='lg:px-1 xl:px-3 py-2'>
            <h1 className='text-center px-1 md:px-2 text-lg font-semibold'>Thurs</h1>
            <h1 className='text-center px-1 md:px-2 py-1 text-3xl font-bold'>28</h1>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>10:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold rounded-xl bg-[#8d929e] text-white'>11:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>-----</h2>
        </div>          
        <div className='lg:px-1 xl:px-3 py-2'>
            <h1 className='text-center px-1 md:px-2 text-lg font-semibold'>Fri</h1>
            <h1 className='text-center px-1 md:px-2 py-1 text-3xl font-bold'>29</h1>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>-----</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>14:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>16:00</h2>
        </div>          
        <div className='lg:px-1 xl:px-3 py-2'>
            <h1 className='text-center px-1 md:px-2 text-lg font-semibold'>Sat</h1>
            <h1 className='text-center px-1 md:px-2 py-1 text-3xl font-bold'>30</h1>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold rounded-xl bg-[#8d929e] text-white'>12:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>14:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>15:00</h2>
        </div>          
        <div className='lg:pl-1 xl:pl-3 py-2 opacity-40'>
            <h1 className='text-center px-1 md:px-2 text-lg font-semibold'>Sun</h1>
            <h1 className='text-center px-1 md:px-2 py-1 text-3xl font-bold'>31</h1>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold rounded-xl bg-[#8d929e] text-white'>09:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>10:00</h2>
            <h2 className='text-center px-1 md:px-2 py-3 text-md font-semibold'>11:00</h2>
        </div>          
    </div>
  )
}

export default CalenderView
