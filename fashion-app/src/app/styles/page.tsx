import Navigation from "../components/Navigation";
import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";

const getItems = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/items", {
      cache: "no-store"
    })

    return response.json();
  } catch (error) {

    console.log("Failed to get items", error)
  }
}

export default async function Home() {
    const items = await getItems();

    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Navigation isHome={false} isLoggedIn={true}/>
        <PageHeader header="Styles"/>

        <div className="overflow-y-auto mx-5 ">
          <Gallery isProfilePage={false} items={items}/>
        </div>

        {/* Bottom margin */}
        <div className="bg-background h-6"></div>

      </div>
    );
  }