"use client";

import { useRouter } from 'next/navigation'
import LogOutSVG from "./svg/LogOutSVG";
import UserSVG from "./svg/UserSVG";
import IconButton from "./IconButton";
import { signOut } from "next-auth/react"

export default function DropDown() {
    const router = useRouter();

    const handleLogout = () => {
        signOut({ redirectTo: "/" })
        //signOut()
        //router.push('/')
        //alert("Logging out it not yet implemented. But the button and redirection works!")
    }

    const handleViewprofile = () => {
        router.push('/profile');
    };

    
    return(
        // Z indec ensures the dropdown displays on top of other elements such as the search bar
        <div className={"absolute border border-hidden rounded-[12px] top-[70px] right-[0px] flex flex-col bg-dark py-4 w-40 z-50"}>
            
            <IconButton icon={<UserSVG/>} label={"View Profile"} styles={"pl-3 bg-dark hover:bg-darkLighten flex items-center space-x-2 py-1"} styles2={"hover:underline text-white text-base"} handleClick={handleViewprofile}/>

            <IconButton icon={<LogOutSVG/>} label={"Logout"} styles={"pl-3 bg-dark hover:bg-darkLighten flex items-center space-x-2 py-1"} styles2={"hover:underline text-white text-base"} handleClick={handleLogout}/>

        </div>
    );
}