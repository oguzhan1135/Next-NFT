'use client'
import { NftProductContext } from "@/Context/NftCardContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CorrectMessage from "../../Messages/CorrectMessage/page";
import InCorrectMessage from "../../Messages/InCorrectMessage/page";



const SignUpForm = () => {
    const { user, setUser } = NftProductContext();
    const router = useRouter();
    const [isSign, setSign] = useState(false)
    const [isSubmit, setSubmit] = useState(false)
    const [formData, setFormData] = useState({
        mail: '',
        password: '',
        name: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmit(true)
        if (formData.name !== "" && formData.mail !== "" && formData.password !== "") {
            setUser([...user, { id: user.length + 1, name: formData.name, mail: formData.mail, password: formData.password }])
            setTimeout(() => {
                router.push("/Login")
            }, 1000);
        } else {
            setSubmit(false)
        }
    }
    return (
        <>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div className="py-4 px-5 border  border-black__write rounded-md">
                    <input type="text" placeholder='Your Full Name' name="name" onChange={handleChange} className=' outline-none bg-transparent' />
                </div>
                <div className="py-4 px-5 border border-black__write rounded-md">
                    <input type="mail" placeholder='Your Email Address' name="mail" onChange={handleChange} className='outline-none bg-transparent' />
                </div>
                <div className="py-4 px-5 border border-black__write rounded-md">
                    <input type="password" placeholder='Set Your Password' name="password" onChange={handleChange} className=' outline-none bg-transparent' />
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" className="w-max" name="remember" id="remember" />
                        Remember me
                    </div>
                    <span className='font-bold'>Forgot Password ?</span>
                </div>
                <button type="submit" className="button w-full">Signup</button>

                {
                    isSubmit ? <>
                        {
                            isSign ? <CorrectMessage name={undefined} message="Congratulations. Registration is completed successfully" /> :
                                <InCorrectMessage message="The information entered is incorrect. Please check your information and try again" />
                        }
                    </> : <></>
                }
            </form>
        </>
    )
}
export default SignUpForm