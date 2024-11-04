import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Footer from "./components/Footer";
import RegularCard from "./components/RegularCard";

export default function Home() {
  return (
    <div>
      <Navigation isHome={true} isLoggedIn={false}/>

      <RegularCard/> 

      <Footer/>
    </div>
  );
}
