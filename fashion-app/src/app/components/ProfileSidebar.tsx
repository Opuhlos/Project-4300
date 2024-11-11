import React from "react";
import { grotesk } from './Fonts';
import HangerSVG from "./svg/HangerSVG";
import LogOutSVG from "./svg/LogOutSVG";

interface ProfileSidebarProps {
  image: string;
  alt: string;
  username: string;
  stylesCount: number;
}

export default function ProfileSidebar({ image, alt, username, stylesCount }:ProfileSidebarProps) {
  return (
    <aside
      style={{
        width: "300px",        
        minWidth: "300px",      
        maxWidth: "300px",      
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px",
        position: "relative",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Profile Picture */}
      <img
        src={image}
        alt={alt}
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />

      {/* Username */}
      <h2 className={`text-4xl ${grotesk.className}`} style={{textAlign: "right" }}>
        {username}
      </h2>

      {/* Styles Count */}
        <p
            className={`text-lg ${grotesk.className}`}
            style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", textAlign: "right" }}
        >
            <HangerSVG/> 
            <span style={{ color: "#FFA216", fontWeight: "500", marginLeft: "6px", marginRight: "4px" }}>{stylesCount}</span>
            <span style={{ color: "black", fontWeight: "300" }}>Styles</span>
        </p>

      {/* Logout Button */}
      <button
        className="flex items-center justify-center px-5 py-3 bg-black text-white rounded-lg w-full mt-auto cursor-pointer hover:bg-gray-800 hover:text-white"
        >
        <LogOutSVG />  Logout
      </button>
    </aside>
  );
};


