import React from 'react'
import HealthStatusCard from './cards/HealthStatusCard'
import ActivityChart from './cards/ActivityCard'
import AppointmentCard from './cards/AppointmentCard'
import { healthData } from '../data/healthData'
import { appointmentData } from '../data/appointments'
import CalenderView from './CalenderView'

const DashbordMain: React.FC = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:justify-items-end'>
        <div className='px-10 pb-10 w-full bg-white rounded-t-2xl'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[#2F3299] py-4 text-4xl font-bold'>Dashboard</h1>
                <h1 className='text-[#2F3299] py-4 text-md font-semibold'>This week</h1>
            </div>
            <div className='grid grid-rows-2 items-start gap-4 xl:grid-cols-3 xl:gap-6 xl:h-2/5 xl:mb-6'> 
            <div className='relative col-span-2 w-full h-[36rem] flex justify-center items-center'>
                <img className='rounded-3xl p-10 h-full w-full bg-[#D8DEF7]/50' src='body.svg'/>
                 <div className="absolute top-[29%] left-[50%] flex items-center">
                   <div className="w-10 h-10 border-dashed border-2 border-[#2F3299] rounded-sm animate-pulse bg-gradient-to-b from-transparent from-40% via-60% via-[#2F3299] to-transparent mr-2" />
                   <span className="bg-[#2F3299] text-white p-2 px-3 rounded-md shadow-md font-medium flex items-center text-sm gap-2">
                     ❤️Healthily Heart
                   </span>
                 </div>
                 <div className="absolute top-[64%] left-[-3%] sm:left-[24%] lg:left-[6%] flex items-center">
                   <span className="bg-[#1ADDED] text-white p-2 px-3 rounded-md shadow-md font-medium flex items-center text-sm gap-2">
                     🦵🏻Healthily Leg
                   </span>
                   <div className="w-10 h-10 border-dashed border-2 border-[#2F3299] rounded-sm animate-pulse bg-gradient-to-b from-transparent from-40% via-60% via-[#2F3299] to-transparent ml-2" />
                 </div>
            </div>
            <div className='w-full h-fit flex flex-wrap items-end justify-start sm:justify-center md:justify-start xl:grid xl:grid-cols-1 gap-3 xl:justify-items-end'>
                {healthData.map((item, index) => (
                    <HealthStatusCard key={index} imageUrl={item.imageUrl} name={item.name} date={item.date} color={item.color} per={item.per}/>
                ))}
                <h1 className='text-[#2F3299] py-2 px-8 text-md font-semibold text-end'>Details</h1>
            </div>
            </div>
            <ActivityChart/>
        </div>
        <div className='p-6 md:p-10'>
            <div className='grid grid-cols-1 justify-items-start mb-6'>
                <div className='mb-6'>
                    <h1 className='text-2xl text-[#2F3299] font-bold'>October 2021</h1>
                </div>
                <CalenderView/>
            </div>
            <div className='flex flex-wrap gap-4'>
                <div className='bg-[#2F3299] text-white p-4 rounded-2xl w-fit'>
                    <div className='flex justify-between items-center gap-4'>
                        <h1 className='text-xl font-semibold'>Dentist</h1>
                        <img className='w-10' src="/teeth.svg"/>
                    </div>
                    <h1 className='text-lg font-normal'>09:00 - 11:00</h1>
                    <h1 className='mt-2 text-lg font-normal'>Dr. Cameron Willamson</h1>
                </div>
                <div className='bg-[#D8DEF7] p-4 rounded-2xl w-fit'>
                    <div className='flex justify-between items-center gap-4'>
                        <h1 className='text-xl font-semibold'>Physiotherapy Appointment</h1>
                        <img className='w-10' src="/biceps.svg"/>
                    </div>
                    <h1 className='text-lg font-normal'>11:00 - 12:00</h1>
                    <h1 className='mt-2 text-lg font-normal'>Dr. Kevin Djones</h1>
                </div>
            </div>
            <h1 className='mt-8 text-[#2F3299] text-3xl font-semibold'>The Upcomming Schedule</h1>
            {appointmentData.map((entry, idx) => (
                <div key={idx} className="mb-6">
                <h2 className='text-[#D5D8DF] py-2 text-xl font-semibold'>On {entry.day}</h2>
                <div className="flex gap-4 flex-wrap">
                  {entry.appointments.map((appt, i) => (
                    <AppointmentCard
                      key={i}
                      name={appt.name}
                      iconurl={appt.iconurl}
                      time={appt.time}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default DashbordMain
