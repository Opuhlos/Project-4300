import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import Button from "../Button";
import PopUpContainer from "./PopUpContainer";
import ScreenDampen from "./ScreenDampen";

export default function CreateStyleButton() {
    const [isFormOpen, setFormOpen] = useState(false);

    const handleCreateAStyleClick = () => {
        setFormOpen(isFormOpen => !isFormOpen)
    }

    const areaRef = useRef<HTMLDivElement>(null);

    // Closes the account drop down if clicked outside
    useEffect(() => {
        // Handler to close the drop down if clicked outside
        const handler = (event: MouseEvent) => {
            if(areaRef.current && !areaRef.current.contains(event.target as Node)){
                setFormOpen(false);
            }
        }

        document.addEventListener("mousedown", handler)
    });

    return(
        <div>
            <Button label={"Create a Style"} styles={"text-xl px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={handleCreateAStyleClick} />

            {isFormOpen && <ScreenDampen/>}  

            {isFormOpen && <PopUpContainer ref={areaRef}/>}    
        </div>
        
    );
}