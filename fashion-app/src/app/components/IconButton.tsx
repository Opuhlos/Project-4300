import React from 'react';
import { ReactNode } from 'react';
import { grotesk } from './Fonts';

interface IconButtonProps {
    label: string;
    styles: string;
    styles2: string;
    icon: ReactNode;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({label, styles, styles2, icon, handleClick}:IconButtonProps) {
    return(
        <button className={`${styles}`} onClick={handleClick}>
            <div>{icon}</div>
            <div className={`${grotesk.className} ${styles2}`} >{label}</div>
        </button>
    );
}