import React from 'react';
import { ReactNode } from 'react';
import { grotesk } from './Fonts';

interface ButtonProps {
    label: string;
    styles: string;
    children: ReactNode;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({label, styles, children, handleClick}:ButtonProps) {
    return(
        <button className={`${grotesk.className} border rounded-[14px] text-xl border-black ${styles}`} onClick={handleClick}>{children}{label} </button>
    );
}