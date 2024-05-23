import React from 'react'
import AuthHead from '../components/AuthHead'
import InputBox from '../components/InputBox'
import PrimaryButton from '../components/PrimaryButton'
import AuthActions from '../components/AuthActions'

const LoginPage = () => {
    return (
        <div className="flex items-center w-full h-full  ">
            <div className="w-full  p-3 flex flex-col gap-8 justify-between ">
            {/* welcome heading and message */}
                <AuthHead heading="Log in to Admin Panel" message="Enter your email id and password below"  />

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
                </div>
                {/* button */}
                <PrimaryButton title="Log In"/>

                {/* page redirection */}
                <AuthActions message="Don't have an account?" path="/registration" text="Register" />
            </div>
        </div>
    )
}

export default LoginPage