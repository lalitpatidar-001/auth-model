import AuthHead from '../components/AuthHead';
import InputBox from '../components/InputBox';
import PrimaryButton from '../components/PrimaryButton';
import AuthActions from '../components/AuthActions';
import { useState } from "react";
import Feedback from '../components/Feedback';

const initialValue = {
    email: "",
    password: ""
};

const LoginPage = () => {
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

        if (!data.email || data.email === "" || data.email.length <= 0) {
            error.email = "Email required!";
        } else if (!emailRegex.test(data.email)) {
            error.email = "Invalid email format! Correct format: example@gmail.com.";
        }

        if (!data.password || data.password === "" || data.password.length <= 0) {
            error.password = "Password required!";
        }

        return error;
    };

    return (
        <div className="flex items-center w-full h-full">
            <form onSubmit={handleSubmitForm} className="w-full p-3 flex flex-col gap-8 justify-between">
                {/* Welcome heading and message */}
                <AuthHead heading="Log in to Admin Panel" message="Enter your email id and password below" />

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
                </div>

                {/* Button */}
                <PrimaryButton type="submit" title="Log In" />

                {/* Page redirection */}
                <AuthActions message="Don&apos;t have an account?" path="/registration" text="Register" />
            </form>
        </div>
    );
};

export default LoginPage;
