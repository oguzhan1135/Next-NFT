'use client'
import { NftProductContext } from "@/Context/NftCardContext"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa"
import { useRouter } from "next/navigation"
import CorrectMessage from "@/Components/Messages/CorrectMessage/page"
import InCorrectMessage from "@/Components/Messages/InCorrectMessage/page"

const EditForm = () => {
    const { loggedUser, setLoggedUser, setUser, user } = NftProductContext();
    const [formData, setFormData] = useState({ name: "", mail: "" })
    const [isSubmit, setSubmit] = useState(false);
    const [message, setMessage] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (loggedUser.name === "") {
            router.push("/Login")
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmit(true);
        if (formData.name !== "" && formData.mail !== "") {
            setMessage(true)
            userControl();
            setTimeout(() => {
                setLoggedUser({ id: 1, name: "", mail: "", password: "" })
                router.push("/Login")
            }, 1800);
        } else {
            setMessage(false);
        }

    };
    const userControl = () => {
        const findUserIndex = user.findIndex((u) => u.id === loggedUser.id);
        if (findUserIndex !== -1) {
            user[findUserIndex].name = formData.name;
            user[findUserIndex].mail = formData.mail;
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
                <div className="flex flex-col gap-6">
                    <h6 className="text-xl font-bold">Account info</h6>
                    <div className="flex flex-col w-full gap-5">
                        <label htmlFor="display-name">Display Name</label>
                        <input type="text" value={formData.name} onChange={handleChange} placeholder={loggedUser.name} name='name' className='p-3 bg-transparent rounded-md border border-black__write' />
                    </div>
                    <div className="flex flex-col w-full gap-5">
                        <label htmlFor="custom-url">Custom URL</label>
                        <input type="text" placeholder='Axies.Trista Francis.com/' name='custom-url' id='custom-url' className='p-3 bg-transparent rounded-md border border-black__write' />
                    </div>
                    <div className="flex flex-col w-full gap-5">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder={loggedUser.mail} onChange={handleChange} value={formData.mail} name='mail' className='p-3 bg-transparent rounded-md border border-black__write' />
                    </div>
                    <div className="flex flex-col w-full gap-5">
                        <label htmlFor="display-name">Bio</label>
                        <textarea className='p-3 bg-transparent rounded-md border border-black__write' name="bio" id="bio" cols={30} rows={6}></textarea>
                    </div>
                    <button type="submit" className="button white-b w-max">
                        <span>Update Profile</span>
                    </button>
                </div>
                <div className="flex flex-col gap-6">
                    <h6 className="text-xl font-bold">Your Social media</h6>
                    <div className="flex flex-col w-full gap-5">
                        <label htmlFor="facebook">Facebook</label>
                        <input type="text" placeholder='Facebook username' name='facebook' id='facebook' className='p-3 bg-transparent rounded-md border border-black__write' />
                    </div>
                    <Link href={"/"}>
                        <div className="button social w-max">
                            <FaFacebook />
                            <span>Connect To Facebook</span>
                        </div>
                    </Link>
                    <div className="flex flex-col w-full gap-5">
                        <label htmlFor="twitter">Twitter</label>
                        <input type="text" placeholder='Trista Francis' name='twitter' id='twitter' className='p-3 bg-transparent rounded-md border border-black__write' />
                    </div>
                    <Link href={"/"}>
                        <div className="button social w-max">
                            <FaTwitter />
                            <span>Connect To Twitter</span>
                        </div>
                    </Link>
                    <div className="flex flex-col w-full gap-5">
                        <label htmlFor="discord">Discord</label>
                        <input type="text" placeholder='Discord username' name='discord' id='discord' className='p-3 bg-transparent rounded-md border border-black__write' />
                    </div>
                    <Link href={"/"}>
                        <div className="button social w-max">
                            <FaDiscord />
                            <span>Connect To Discord</span>
                        </div>
                    </Link>

                </div>
                {
                    isSubmit ?
                        message ?
                            <CorrectMessage name={undefined} message="Congratulations. Your information has been successfully updated. You are redirected to the login page..." /> :
                            <InCorrectMessage message="Sorry, Name and e-mail fields cannot be left blank." /> : <></>
                }
            </form>
        </>
    )
}
export default EditForm