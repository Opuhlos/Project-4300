"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { grotesk } from './Fonts';
import HangerSVG from "./svg/HangerSVG";
import LogOutSVG from "./svg/LogOutSVG";
import ProfileIcon from "./ProfileIcon";
import IconButton from "./IconButton";
import { signOut } from "next-auth/react"


interface ProfileSidebarProps {
  image: string;
  alt: string;
  username: string;
  stylesCount: number;
}

export default function ProfileSidebar({ image, alt, username, stylesCount }:ProfileSidebarProps) {
  const router = useRouter();

  const handleLogout = () => {
    signOut({ redirectTo: "/" })
  }

  return (
    <aside className="px-5"

      style={{
        width: "300px",        
        minWidth: "300px",      
        maxWidth: "300px",      
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
 
      }}
    >
      {/* Profile Picture */}
      <ProfileIcon image="/images/Naruto.jpg" alt="Profile Picture" height="250px" width="250px"/>
      <br></br>
      {/* Username */}
      <h2 className={`text-4xl text-right ${grotesk.className}`}> {username} </h2>

      {/* Styles Count */}
        <p
            className={`text-lg ${grotesk.className}`}
            style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", textAlign: "right" }}
        >
            <HangerSVG/> 
            <span style={{ color: "#FFA216", fontWeight: "500", marginLeft: "6px", marginRight: "4px" }}>{stylesCount}</span>
            
            {stylesCount == 1 ? <span style={{ color: "black", fontWeight: "300" }}>Style</span> :  <span style={{ color: "black", fontWeight: "300" }}>Styles</span>}
        </p>

      {/* Logout Button */}
      <IconButton icon={<LogOutSVG/>} label={"Logout"} styles={"pl-3 bg-dark w-full px-5 py-3 rounded-lg mt-auto hover:bg-darkLighten justify-center flex items-center space-x-2"} styles2={"hover:underline text-white text-base"} handleClick={handleLogout}/>

    </aside>
  );
};


