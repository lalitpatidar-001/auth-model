import React from 'react'
import AuthHead from '../components/AuthHead'
import PrimaryButton from '../components/PrimaryButton'
import OTPInput from '../components/OTPInput'

const VerifyPage = () => {
  return (
    <div className="flex items-center w-full h-full p-10  ">
      <div className="flex flex-col items-center  gap-4 w-full">
        <AuthHead heading="Verify your email" message="Enter the OTP from your register email id" />
        <div className="flex gap-4">
          <OTPInput />
          <OTPInput />
          <OTPInput />
          <OTPInput />
          <OTPInput />
          <OTPInput />
        </div>
        <PrimaryButton title="proceed" />
      </div>
    </div>
  )
}

export default VerifyPage