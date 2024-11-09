import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Footer from "./components/Footer";
import RegularCard from "./components/RegularCard";
import GalleryCard from "./components/GalleryCard";

export default function Home() {
  return (
    <div>
      <Navigation isHome={true} isLoggedIn={false}/>

      <Splash /> 

      <Footer/>
    </div>
  );
}
