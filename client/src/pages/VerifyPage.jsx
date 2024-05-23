import React, { useState } from 'react';
import AuthHead from '../components/AuthHead';
import PrimaryButton from '../components/PrimaryButton';
import OTPInput from '../components/OTPInput';
import Feedback from '../components/Feedback';

const initialState = ['', '', '', '', '', '']
const VerifyPage = () => {
  const [otp, setOtp] = useState(initialState);
  const [error, setError] = useState(null);

  const handleInputChange = (index, e) => {
    // Allow only digits and limit to one character
    if (e.target.value.length <= 1 && !isNaN(e.target.value)) {
      const newOtp = [...otp];
      newOtp[index] = e.target.value;
      setOtp(newOtp);
      console.log(otp)

      if (e.target.value !== '' && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleBackspace = (index, value) => {
    if (value === '' && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null)
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      setError("Fill all OTP field")
      return
    }
    //  call api 
    setOtp(initialState)
    console.log('Entered OTP:', enteredOtp);
  };

  return (
    <div className="flex items-center w-full h-full p-10">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
        <AuthHead heading="Verify your email" message="Enter the OTP from your registered email id" />
        <div className="flex gap-4">
          {otp.map((value, index) => (
            <OTPInput
              key={index}
              id={`otp-input-${index}`}
              value={value}
              onChange={(e) => handleInputChange(index, e)}
              onBackspace={() => handleBackspace(index, value)}
            />
          ))}
        </div>
        <Feedback message={error} />
        <PrimaryButton type="submit" title="Proceed" />
      </form>
    </div>
  );
};

export default VerifyPage;
