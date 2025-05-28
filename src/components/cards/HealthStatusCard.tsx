import React from 'react'

interface HealthStatusCardProps {
  imageUrl: string;
  name: string;
  date: string;
  color: string;
  per: number;
}

const HealthStatusCard: React.FC<HealthStatusCardProps> = ({imageUrl, name, date, color, per}) => {
  return (
    <div className="bg-[#D8DEF7]/50 p-6 xl:p-4 rounded-2xl w-fit h-fit">
      <div className="flex items-center gap-4">
        <img className="w-8" src={imageUrl} alt={name} />
        <h1 className="text-2xl text-[#2F3299] font-bold">{name}</h1>
      </div>
      <h2 className="mt-4 text-[#C5CACF] font-semibold text-md">Date: {date}</h2>
      <div className="my-2 bg-[#C5CACF] rounded-full h-2 w-full overflow-hidden">
        <div className="h-full rounded-full" style={{width: per, backgroundColor: color,}}/>
      </div>
    </div>
  )
}

export default HealthStatusCard
