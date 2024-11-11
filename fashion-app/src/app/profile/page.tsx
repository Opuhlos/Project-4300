"use client";

import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import ProfileSidebar from "../components/ProfileSidebar"; 
import { Item } from "../styles/page";

const itemArray: Item[] = [
  {
    id: 1,
    title: 'Dapper Dinner',
    description: 'Perfect for steak dinners.',
    image: 'images/dapper.png',
    creator: 'God'
  },
  {
    id: 2,
    title: 'Nonchalant',
    description: 'My Sunday outfit. I feel power surging through me with this outfit. Be responsible and dress warmly folks.',
    image: 'images/pepar.png',
    creator: 'Peter'
  },
  {
    id: 3,
    title: 'Rose Apt',
    description: 'I sang with Bruno Mars in this outfit.',
    image: 'images/roseapt.png',
    creator: 'Rose'
  },
  {
    id: 3,
    title: 'Tea Party Tingles',
    description: 'This outfit took a while to put on.',
    image: 'images/vict.png',
    creator: 'Rania'
  },
];

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navigation isHome={false} isLoggedIn={true} />
      <PageHeader header="Your Closet" />
      
      <div className="flex flex-row flex-1 overflow-hidden mx-5">
          {/* Sidebar on the left */}
          <ProfileSidebar image="/images/Naruto.jpg" alt="Profile Picture" username="Username" stylesCount={109}/>

          {/* Gallery on the right */}
          <div className="flex-1 overflow-y-auto">
            <Gallery itemArray={itemArray}/>
          </div>

        </div>

       {/* Bottom margin */}
       <div className="bg-background h-6"></div>

    </div>
  );
}