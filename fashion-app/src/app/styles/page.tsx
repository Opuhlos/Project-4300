import Navigation from "../components/Navigation";

export default function Home() {
    return (
      <div>
        <Navigation isHome={false} isLoggedIn={true}/>
        <p>Styles Gallery Page</p>
      </div>
    );
  }