import React from 'react'
import { Outlet } from "react-router-dom"
import imgBg from "../assets/bg-img.jpeg"

const AuthLayout = () => {
    return (
        <div className="bg-[#FFFFFF] w-full h-screen flex items-center justify-center">
            <div className="flex h-[80vh] max-w-[780px] sm:w-full w-[80%]  rounded-[30px] shadow-lg drop-shadow-sm shadow-black drop-shadow-black overflow-hidden ">
                <img className="flex-1 w-full hidden  sm:block " src={imgBg} />
                <div className="flex-1 p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout