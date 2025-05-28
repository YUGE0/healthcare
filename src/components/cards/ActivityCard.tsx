import React from 'react'


const ActivityCard: React.FC = () => {
    
    const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    const barHeights = ['h-20', 'h-16', 'h-12', 'h-10'];

    const barColors = [""];

  
    return (
    <div className='bg-[#F5F9FF] p-4 rounded-2xl'>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#2F3299] font-bold text-xl">Activity</h2>
        <span className="text-md text-[#8d929e]">3 appointments on this week</span>
      </div>
      <span>
        <div className="flex justify-between items-center mb-4 px-8">
        <div className="w-full flex justify-around items-center">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className={`inline-block w-1 ${barHeights[i % 4]} rounded-full`}
              style={{ backgroundColor: barColors[i] || '#D5D8DF' }}
            ></span>
          ))}
        </div>
      </div>
        <div className='flex justify-around'>
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center">
            <p className="text-sm text-gray-600">{day}</p>
          </div>
        ))}
        </div>
      </span>
    </div>
  )
}

export default ActivityCard
