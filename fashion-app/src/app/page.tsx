import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Footer from "./components/Footer";
import RegularCard from "./components/RegularCard";
import GalleryCard from "./components/GalleryCard";
import { getSession } from "@/libs/getSession";

export default async function Home() {
  const session = await getSession();
    const user = session?.user;
    // Checks if the usr is logged in to display proper nav
    const isIn = user ? true : false;
  return (
    <div>
      <Navigation isHome={true} isLoggedIn={isIn}/>

      <Splash /> 

      <Footer/>
    </div>
  );
}
