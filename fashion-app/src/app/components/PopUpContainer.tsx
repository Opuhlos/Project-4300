import { ReactNode } from "react";

interface PopUpContainerProps {
    children: ReactNode;
}

export default function PopUpContainer({children}:PopUpContainerProps) {
    return(
        <div className="z-10 fixed inset-0 bg-dark top-0 left-0 w-screen h-screen bg-opacity-80 flex items-center justify-center">
            {children}
        </div>
    );
}