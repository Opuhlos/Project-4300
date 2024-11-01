import Navigation from "../components/Navigation";

export default function Home() {
    return (
      <div>
        <Navigation isHome={false} isLoggedIn={true}/>
        <p>Profile Page</p>
      </div>
    );
  }