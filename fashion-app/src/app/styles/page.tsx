import Navigation from "../components/Navigation";
import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";

export default function Home() {
    return (
      <div className="flex flex-col h-screen">
        <Navigation isHome={false} isLoggedIn={true}/>
        <PageHeader header="Styles"/>

        <Gallery/>

        {/* Bottom margin */}
        <div className="bg-background h-6">
        </div>

      </div>
    );
  }