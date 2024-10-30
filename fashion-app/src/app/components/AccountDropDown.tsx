import { useEffect } from "react";
import { useState } from "react";

import Button from "./Button";
import ArrowDropDownSVG from "./svg/ArrowDropDownSVG";
import DropDown from "./DropDown";

export default function AccountDropDown() {
    const [isAccountDropDownOpen, setAccountDropDownOpen] = useState(false);

    const handleAccountDropDownClick = () => {
        setAccountDropDownOpen(isAccountDropDownOpen => !isAccountDropDownOpen)
    }

    // Closes the account drop down if clicked outside
    useEffect(() => {
        // Handler to close the drop down if clicked outside
        const handler = (e) => {
            if(e.target){
                setAccountDropDownOpen(false);
            }
        }

        document.addEventListener("mousedown", handler)
    });

    

    return (
        <div>
            <Button label={""} styles={"p-0 mx-0 rounded-full border-none hover:bg-orange"} children={<ArrowDropDownSVG/>} handleClick={ handleAccountDropDownClick }/>

            {isAccountDropDownOpen && <DropDown/>}
        </div>
    );
}