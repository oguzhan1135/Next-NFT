import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownProps {
    options: string[];
    defaultOption: string;
    onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        onSelect(option);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col relative" ref={dropdownRef}>
                <div className="dropdown-select" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <span className='text-on__surface__dark dark:text-on__surface'>{selectedOption}</span>
                    <i className='text-on__surface__dark dark:text-on__surface'><FaChevronDown /></i>
                </div>
                <div className={`absolute top-[45px] w-full z-50 flex flex-col bg-[#F8F8F8] dark:bg-black__write rounded-bl-md rounded-br-md ${isDropdownOpen ? 'block' : 'hidden'}`}>
                    {options.map((option, index) => (
                        <div
                            key={option}
                            className={`px-4 py-[9px] border-t border-t-white__second border-opacity-20 cursor-pointer text-on__surface__dark dark:text-on__surface hover:bg-white__second transition-all duration-300 ${index === options.length - 1 ? 'rounded-bl-md rounded-br-md' : ''
                                }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dropdown;
