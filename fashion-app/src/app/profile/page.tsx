import PageHeader from "../components/PageHeader";
import Profile from "../components/ProfileIcon";
import Navigation from "../components/Navigation";


export default function Home() {
    return (
      <div>
        <Navigation isHome={false} isLoggedIn={true}/>
        <PageHeader header="Your Closet"/>
      </div>
    );
  }