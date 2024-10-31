import React from 'react';
import { ReactNode } from 'react';
import { grotesk } from './Fonts';

interface IconButtonProps {
    label: string;
    styles: string;
    icon: ReactNode;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({label, styles, icon, handleClick}:IconButtonProps) {
    return(
        <button className={`pl-3 bg-dark hover:bg-darkLighten flex items-center space-x-2 py-1 ${styles}`} onClick={handleClick}>
            <div>{icon}</div>
            <div className={`${grotesk.className} hover:underline text-white text-base`} >{label}</div>
        </button>
    );
}