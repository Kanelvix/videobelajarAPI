import React from 'react'

function SectionTitle(props) {
  return (
    <div className={`flex flex-col justify-center items-center text-${props.textAlign} px-36 gap-6`}>
      {props.heading === "3" ? (
        <h3 className={`${props.type === "contents" ? "text-[#222325]" : "text-white"} font-bold text-${props.fontSize}`}>{props.title}</h3>
      ) : (
        <h1 className={`text-white font-bold text-${props.fontSize}`}>{props.title}</h1>
      )}

      <p className={props.type === "contents" ? "text-[#333333AD]" : "text-white"}>{props.desc}</p>
    </div>
  )
}

export default SectionTitle