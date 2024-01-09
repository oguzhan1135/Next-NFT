import React from "react";
interface Message {
    message: string;
    name: string | undefined;
}
const CorrectMessage: React.FC<Message> = ({ message, name }) => {
    return (
        <div className="p-5 w-full rounded-xl bg-done bg-opacity-10 text-done font-bold text-2xl">
            <div className="flex flex-row gap-2">
                <span>{message}</span>
                <span>{name}</span>
            </div>
        </div>
    )
}
export default CorrectMessage