import Navigation from "../components/Navigation";
import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";

export default function Home() {
    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Navigation isHome={false} isLoggedIn={true}/>
        <PageHeader header="Styles"/>

        <div className="overflow-y-auto mx-5 ">
          <Gallery/>
        </div>

        {/* Bottom margin */}
        <div className="bg-background h-6"></div>

      </div>
    );
  }