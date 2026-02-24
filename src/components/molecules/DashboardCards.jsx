import React from 'react'

function DashboardCards( {icon, title, quantity, color} ) {
  let bgColor
  let fillColor

  if (color==="blue") {
    bgColor = "bg-[--light-blue-color]"
    fillColor = "var(--blue-color)"
  } else if (color==="green") {
    bgColor = "bg-[--light-green-color]"
    fillColor = "var(--dark-green-color)"
  } else if (color==="purple") {
    bgColor = "bg-[--light-purple-color]"
    fillColor = "var(--purple-color)"
  }

  return (
    <div className='bg-white p-5 shadow-md flex items-center gap-4 rounded-lg border border-[--border-color]'>
      <div className={`
        size-14 flex items-center justify-center rounded-full ${bgColor}
      `}>
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={fillColor} viewBox={"0 0 24 24"}>
          {icon}
        </svg>
      </div>
      <div>
        <p className='text-sm font-medium'>{title}</p>
        <p className='font-bold text-[--dark-color] text-2xl'>{quantity}</p>
      </div>
    </div>
  )
}

export default DashboardCards