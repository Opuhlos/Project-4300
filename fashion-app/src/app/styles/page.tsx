import Navigation from "../components/Navigation";
import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";
import { IItem } from "@/models/itemSchema";

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

// const itemArray: Item[] = [
//   {
//     id: 1,
//     title: 'Dapper Dinner',
//     description: 'Perfect for steak dinners.',
//     image: 'images/dapper.png',
//     creator: 'God'
//   },
//   {
//     id: 2,
//     title: 'Nonchalant',
//     description: 'My Sunday outfit. I feel power surging through me with this outfit. Be responsible and dress warmly folks.',
//     image: 'images/pepar.png',
//     creator: 'Peter'
//   },
//   {
//     id: 3,
//     title: 'Rose Apt',
//     description: 'I sang with Bruno Mars in this outfit.',
//     image: 'images/roseapt.png',
//     creator: 'Rose'
//   },
//   {
//     id: 3,
//     title: 'Tea Party Tingles',
//     description: 'This outfit took a while to put on.',
//     image: 'images/vict.png',
//     creator: 'Rania'
//   },
// ];

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