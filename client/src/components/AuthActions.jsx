import React from 'react'
import { Link } from "react-router-dom"

const AuthActions = ({ message, path, text }) => {
    return (
        <>

            <div className="flex items-center justify-center w-full gap-2">
                <span className="text-[#9FA2B4] text-[14px] font-[400]">{message}</span>
                <Link to={path}>
                    <span className="text-[#101010] text-[14px] font-semibold hover:text-blue-600">{text}</span>
                </Link>
            </div>
        </>
    )
}

export default AuthActions