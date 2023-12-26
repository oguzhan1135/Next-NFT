import React from 'react'
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUp = () => {
    return (
        <div className="flex flex-col max-w-2xl gap-10 w-full pt-10 overflow-hidden">
            <h1 className='ml-auto mr-auto text-4xl font-bold '>Signup to Nfts</h1>
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
                <form className='flex flex-col gap-6'>
                    <div className="py-4 px-5 border border-black__write rounded-md">
                        <input type="text" placeholder='Your Full Name' className=' outline-none bg-transparent' />
                    </div>
                    <div className="py-4 px-5 border border-black__write rounded-md">
                        <input type="text" placeholder='Your Email Address' className=' outline-none bg-transparent' />
                    </div>
                    <div className="py-4 px-5 border border-black__write rounded-md">
                        <input type="password" placeholder='Set Your Password' className=' outline-none bg-transparent' />
                    </div>
                </form>
                <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" name="remember" id="remember"/>
                        Remember me
                    </div>
                    <span className='font-bold'>Forgot Password ?</span>
                </div>
                <div className="button w-full">Signup</div>
            </div>
        </div>
    )
}

export default SignUp