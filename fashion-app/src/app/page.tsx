import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Footer from "./components/Footer";
import RegularCard from "./components/RegularCard";
import GalleryCard from "./components/GalleryCard";
import { getSession } from "@/libs/getSession";
import { SessionProvider } from "next-auth/react";

export default async function Home() {
    const session = await getSession();
    const user = session?.user;
    const userEmail = user?.email;
    const userName = user?.name;
    // Checks if the usr is logged in to display proper nav
    const isIn = user ? true : false;
  return (
    <div>
      <Navigation isHome={true} isLoggedIn={isIn} userEmail={userEmail} userName={userName}/>

      <Splash /> 

      <Footer/>
    </div>
  );
}
