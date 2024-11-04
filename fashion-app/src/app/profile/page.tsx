import ProfileHeader from "../components/ProfileHeader";
import Profile from "../components/ProfileIcon";
import Navigation from "../components/Navigation";


export default function Home() {
    return (
      <div>
        <Navigation isHome={false} isLoggedIn={true}/>
        <ProfileHeader/>
      </div>
    );
  }