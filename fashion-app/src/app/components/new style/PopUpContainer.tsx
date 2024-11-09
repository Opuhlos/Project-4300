import RegularCard from "../RegularCard";
import React, { forwardRef } from 'react';

type PopUpContainerProps = {
    ref: React.Ref<HTMLDivElement>;
}

export default function PopUpContainer({ref}:PopUpContainerProps) {
    return(
        <div className="fixed inset-0 flex items-center justify-center z-20">
            <div ref={ref}>
                <RegularCard/>
            </div>
        </div>
    );
}