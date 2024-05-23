import React from 'react'

const PrimaryButton = ({title,type}) => {
  return (
    <button type={type} className="bg-[#101010] rounded-[8px] w-full font-bold text-white p-2">{title}</button>
  )
}

export default PrimaryButton