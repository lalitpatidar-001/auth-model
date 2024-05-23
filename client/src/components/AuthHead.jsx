import React from 'react'

const AuthHead = ({heading,message}) => {
  return (
    <div className="flex flex-col  items-center justify-center">
        <h1 className="text-[24px] text-[#252733] font-[600]">{heading}</h1>
        <span className="text-[14px] text-[#9FA2B4] font-[400]">{message}</span>
    </div>
  )
}

export default AuthHead