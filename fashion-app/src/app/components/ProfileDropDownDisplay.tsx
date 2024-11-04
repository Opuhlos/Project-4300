"use client";

import { useRouter } from 'next/navigation'
import LogOutSVG from "./svg/LogOutSVG";
import UserSVG from "./svg/UserSVG";
import IconButton from "./IconButton";

export default function DropDown() {
    const router = useRouter();

    const handleLogout = () => {
        alert("Logging out it not yet implemented. But the button works!")
    }

    const handleViewprofile = () => {
        router.push('/profile');
    };

    
    return(
        // Z indec ensures the dropdown displays on top of other elements such as the search bar
        <div className={"absolute border border-hidden rounded-[12px] top-[70px] right-[0px] flex flex-col bg-dark py-4 w-40 z-50"}>
            
            <IconButton icon={<UserSVG/>} label={"View Profile"} styles={""} handleClick={handleViewprofile}/>

            <IconButton icon={<LogOutSVG/>} label={"Logout"} styles={""} handleClick={handleLogout}/>

        </div>
    );
}