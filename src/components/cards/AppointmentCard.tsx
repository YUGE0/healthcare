import React from 'react'

interface AppointmentCardProps{
    name: string;
    iconurl: string;
    time: string;
}

// {name, iconurl, time}

const AppointmentCard: React.FC<AppointmentCardProps> = ({name, iconurl, time}) => {
  return (
    <div className='bg-[#D8DEF7] p-4 rounded-2xl w-fit'>
        <div className='flex justify-between items-center gap-4'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <img className='w-10' src={iconurl}/>
        </div>
        <h1 className='mt-2 text-lg font-normal'>{time}</h1>
    </div>
  )
}

export default AppointmentCard
