import React, { useState } from 'react'
import InputBox from '../components/InputBox'
import AuthHead from '../components/AuthHead'
import PrimaryButton from '../components/PrimaryButton'
import AuthActions from '../components/AuthActions'
import Feedback from '../components/Feedback'


const initialValue = {
  email: "",
  password: "",
  confirmPassword: ""
}

const RegistrationPage = () => {

  const [userData, setUserData] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    console.log(userData)
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationErrors = validateData(userData);
    setErrors(validationErrors);

    // Proceed only if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      console.log("calling API");
      // call API here
    } else {
      console.log("Validation Errors: ", validationErrors);
    }
  };

  const validateData = (data) => {
    let error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!data.email || data.email === "" || data.email.length <= 0) {
      error.email = "Email required!";
    } else if (!emailRegex.test(data.email)) {
      error.email = "Invalid email format! Correct format: example@gmail.com.";
    }

    if (!data.password || data.password === "" || data.password.length <= 0) {
      error.password = "Password required!";
    } else if (!passwordRegex.test(data.password)) {
      error.password = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    if (!data.confirmPassword || data.confirmPassword === "" || data.confirmPassword.length <= 0) {
      error.confirmPassword = "Confirm Password required!";
    } else if (data.password !== data.confirmPassword) {
      error.confirmPassword = "password do not match!"
    }



    return error;
  };


  return (
    <div className="flex items-center w-full h-full  ">
      <div className="w-full  p-3 flex flex-col gap-8 justify-between ">
        {/* welcome heading and message */}
        <AuthHead heading="Register to Admin Panel" message="Enter your phone number and password below" />

        {/* input fields */}
        <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
          {/* Input fields */}
          <div className="flex flex-col gap-3">
            <InputBox
              value={userData.email}
              name="email"
              label="Email Id"
              placeholder="Enter your email id"
              type="email"
              handleChangeInput={handleChangeInput}
            />
            <Feedback message={errors?.email} />
            <InputBox
              value={userData.password}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
              handleChangeInput={handleChangeInput}
            />
            <Feedback message={errors?.password} />

            <InputBox
              value={userData.confirmPassword}
              name="confirmPassword"
              label="confirm password"
              placeholder="Enter your confirm password"
              type="password"
              handleChangeInput={handleChangeInput}
            />
            <Feedback message={errors?.confirmPassword} />
          </div>
          {/* button */}
          <PrimaryButton type="submit" title="Register" />

          {/* page redirection */}
          <AuthActions message="Already have an account?" path="/" text="Login" />
        </form>
      </div>
    </div>
  )
}

export default RegistrationPage