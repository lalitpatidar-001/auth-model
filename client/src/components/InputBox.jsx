import React from 'react'

const InputBox = ({
  label,
  name,
  placeholder,
  type,
  handleChangeInput,
  required}) => {
  return (
    <div className="flex flex-col gap-1 ">
        <label htmlFor="" className="text-[12px] font-[600] uppercase text-[#101010]">{label}</label>
        <input className="
        p-2 outline-none
        border-[1.5px] border-[#101010]
        rounded-[8px] placeholder:text-[#9FA2B4] placeholder:text-[14px] placeholder:font-[400]" 
        placeholder={placeholder}
        type={type}
        onChange={handleChangeInput}
        // required={required}
        name={name}
        />
    </div>
  )
}

export default InputBox