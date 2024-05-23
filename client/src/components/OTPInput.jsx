import React from 'react';

const OTPInput = ({ id, value, onChange, onBackspace }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      onBackspace();
    }
  };

  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      maxLength="1"
      className="h-[30px] outline-none text-center w-[30px] rounded-[5px] border-[1px] border-[#989898]"
    />
  );
};

export default OTPInput;
