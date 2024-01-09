import React from "react";
interface Message {
    message: string;
}
const InCorrectMessage:React.FC<Message> = ({message}) => {
    return (
        <div className="p-5 w-full rounded-xl bg-critical bg-opacity-10 text-critical font-bold text-2xl">
            {message} 
        </div>
    )
}
export default InCorrectMessage