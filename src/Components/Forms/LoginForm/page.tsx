'use client'
import React, { useState } from "react";
import { NftProductContext } from "@/Context/NftCardContext";
import CorrectMessage from "../../Messages/CorrectMessage/page";
import InCorrectMessage from "../../Messages/InCorrectMessage/page";
import Link from "next/link";
import { useRouter } from "next/navigation";


const LoginForm = () => {
    const { user, setLoggedUser } = NftProductContext();
    const [formData, setFormData] = useState({
        mail: '',
        password: '',
    });
    const findUser = user.find((user) => user.mail === formData.mail)
    const [isLogged, setLoged] = useState(false);
    const [isSubmit, setSubmit] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        userControl();
        setSubmit(true)
        setTimeout(() => {
            setFormData({ mail: "", password: "" });
        }, 1550);


    };
    const userControl = () => {
        if (findUser?.mail === formData.mail && findUser.password === formData.password) {
            setLoged(true)
            setTimeout(() => {
                router.push("/")
                setLoggedUser({ id: findUser.id, name: findUser.name, mail: findUser.mail, password: findUser.password })
            }, 1500);
        } else {
            setLoged(false)
        }
    }

    return (
        <form className='flex flex-col gap-6 pb-20' onSubmit={handleSubmit}>
            <div className="py-4 px-5 border border-black__write rounded-md">
                <input type="mail" placeholder='Your Email Address' value={formData.mail} onChange={handleChange} name="mail" className=' outline-none bg-transparent' />
            </div>
            <div className="py-4 px-5 border border-black__write rounded-md">
                <input type="password" placeholder='Your Password' name="password" value={formData.password} onChange={handleChange} className=' outline-none bg-transparent' />
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2">
                    <input type="checkbox" name="remember" className='w-max' id="remember" />
                    Remember me
                </div>
                <span className='font-bold'>Forgot Password ?</span>
            </div>
            <button type="submit" className="button w-full">Login</button>
            {
                isSubmit ? <>
                    {
                        isLogged ? <CorrectMessage message="Welcome" name={findUser?.name} /> :
                            <div className="flex flex-col gap-5">
                                <InCorrectMessage message={`Sorry, the field entered is empty or incorrect. If you are not registered, you can register from the link below.`} />
                                <Link href={"/SignUp"} className="text-hover text-2xl text-center">SignUp</Link>
                            </div>
                    }
                </> : <>
                </>
            }
        </form>
    )
}
export default LoginForm