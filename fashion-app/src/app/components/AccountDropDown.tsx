import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import Button from "./Button";
import ArrowDropDownSVG from "./svg/ArrowDropDownSVG";
import DropDown from "./DropDown";

export default function AccountDropDown() {
    const [isAccountDropDownOpen, setAccountDropDownOpen] = useState(false);

    const handleAccountDropDownClick = () => {
        setAccountDropDownOpen(isAccountDropDownOpen => !isAccountDropDownOpen)
    }

    const areaRef = useRef<HTMLDivElement>(null);

    // Closes the account drop down if clicked outside
    useEffect(() => {
        // Handler to close the drop down if clicked outside
        const handler = (event: MouseEvent) => {
            if(areaRef.current && !areaRef.current.contains(event.target as Node)){
                setAccountDropDownOpen(false);
            }
        }

        document.addEventListener("mousedown", handler)
    });

    return (
        <div className="relative inline-block" ref={areaRef}>
            <Button label={""} styles={`p-0 mx-0 rounded-full border-none hover:bg-orange ${isAccountDropDownOpen ? `bg-orange` : `bg-background`} `} children={<ArrowDropDownSVG/>} handleClick={ handleAccountDropDownClick }/>

            {isAccountDropDownOpen && <DropDown/>}
        </div>
    );
}

// https://youtu.be/HfZ7pdhS43s?si=iq9v6JqLHDTwSReR Click OUtside to Close resource
// https://youtu.be/nS-kXNmB4Gg?si=qOTYhk6ZD56cORKy Building a Drop Down Menu