import React from 'react'

function Button(props) {
  return (
    <button className={`h-10 text-[${props.color}] bg-[${props.bg}] rounded-lg font-medium cursor-pointer hover:opacity-80 duration-100 flex justify-center items-center w-full px-6 active:opacity-100`}>{props.text}</button>
  )
}

export default Button