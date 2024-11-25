import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";
import { getSession } from "@/libs/getSession";

const getItems = async (query = "") => {
  try {
    const url = query ? `http://localhost:3000/api/items?q=${query}` : "http://localhost:3000/api/items";
    const response = await fetch(url, {
      cache: "no-store"
    })

    return response.json();
  } catch (error) {
    console.log("Failed to get items", error)
  }
}

export default async function Home() {
    const session = await getSession();
    const user = session?.user;
    console.log(user);
    // Checks if the usr is logged in to display proper nav
    const isIn = user ? true : false;
    const userEmail = user?.email;
    const userName = user?.name;
    console.log(userEmail);
    console.log(userName);
    //if(!userEmail || !userName) throw new Error("No user Email")
    
    const items = await getItems();

    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Navigation isHome={false} isLoggedIn={isIn} userEmail={userEmail} userName={userName}/>
        <PageHeader header="Styles" initialItems={items} />

        <div className="overflow-y-auto mx-5 ">
          <Gallery isProfilePage={false} items={items}/>
        </div>

        {/* Bottom margin */}
        <div className="bg-background h-6"></div>

      </div>
    );
  }