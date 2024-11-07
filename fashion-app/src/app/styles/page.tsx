import Navigation from "../components/Navigation";
import PageHeader from "../components/PageHeader";

export default function Home() {
    return (
      <div>
        <Navigation isHome={false} isLoggedIn={true}/>
        <PageHeader header="Styles"/>
      </div>
    );
  }