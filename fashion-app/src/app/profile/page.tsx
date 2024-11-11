"use client";

import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import ProfileSidebar from "../components/ProfileSidebar"; 

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navigation isHome={false} isLoggedIn={true} />
      <PageHeader header="Your Closet" />
      
      <div className="flex flex-row flex-1 overflow-hidden mx-5">
          {/* Sidebar on the left */}
          <ProfileSidebar image="/images/Naruto.jpg" alt="Profile Picture" username="Username" stylesCount={109}/>

          {/* Gallery on the right */}
          <div className="flex-1 overflow-y-auto">
            <Gallery isProfilePage={true}/>
          </div>

        </div>

       {/* Bottom margin */}
       <div className="bg-background h-6"></div>

    </div>
  );
}