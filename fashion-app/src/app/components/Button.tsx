import React from 'react';
import { grotesk } from './Fonts';

interface ButtonProps {
    label: string;
    styles: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({label, styles, handleClick}:ButtonProps) {
    return(
        <button className={`${grotesk.className} border rounded-[14px] px-5 py-3 border-black ${styles}`} onClick={handleClick}>{label}</button>
    );
}