import React from 'react'
import InputBox from '../components/InputBox'
import AuthHead from '../components/AuthHead'
import PrimaryButton from '../components/PrimaryButton'
import AuthActions from '../components/AuthActions'

const RegistrationPage = () => {
  return (
    <div className="flex items-center w-full h-full  ">
      <div className="w-full  p-3 flex flex-col gap-8 justify-between ">
        {/* welcome heading and message */}
        <AuthHead heading="Register to Admin Panel" message="Enter your phone number and password below" />

        {/* input fields */}
        <div className="flex flex-col gap-3">
          <InputBox
            label="Email Id"
            placeholder="Enter your email id"
            type="email"
          />
          <InputBox
            label="password"
            placeholder="Enter your password"
            type="password"
          />
          <InputBox
            label="confirm password"
            placeholder="Enter your confirm password"
            type="password"
          />
        </div>
        {/* button */}
        <PrimaryButton title="Register" />

        {/* page redirection */}
        <AuthActions message="Already have an account?" path="/login" text="Login" />
      </div>
    </div>
  )
}

export default RegistrationPage