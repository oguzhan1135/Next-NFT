import LoginForm from '@/Components/Forms/LoginForm/page';
import React from 'react'
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="flex flex-col max-w-2xl gap-10 w-full pt-10 overflow-hidden">
            <h1 className='ml-auto mr-auto text-4xl font-bold '>Login to Nfts</h1>
            <div className="flex flex-row items-center gap-3 w-full justify-center">
                <span className='border border-white__second w-60'></span>
                Login with social
                <span className='border border-white__second w-60'></span>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <div className="button w-full">
                    <FaGoogle />
                    <span>Google</span>
                </div>
                <div className="button w-full">
                    <FaFacebook />
                    <span>Facebook</span>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3 w-full justify-center">
                <span className='border border-white__second w-60'></span>
                Or login with email
                <span className='border border-white__second w-60'></span>
            </div>
            <div className="flex flex-col gap-6">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login