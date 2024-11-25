import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import ProfileSidebar from "../components/ProfileSidebar"; 
import { getSession } from "@/libs/getSession";
import { redirect } from "next/navigation";

// To who ever is implementing the feature to get the correct
// items based on the user, you just need to adjust the /items/[id]/profile route
// to take, say, the user id or something instead. At the moment all its doing 
// is using the name of the creator to filter for items made by that creator.
// for testing im just using "Unknown" - eric
//const creator = "Unknown";

const getUserItems = async () => {
  const session = await getSession();
  const user = session?.user?.email;
  try {
    const response = await fetch(`http://localhost:3000/api/items/${user}/profile`, {
      cache: "no-store"
    })
    return response.json();
  } catch (error) {

    console.log("Failed to get items", error)
  }
}

export default async function Profile() {
  const session = await getSession();
  const user = session?.user;
  if(!user) return redirect("/login");
  // Checks if the usr is logged in to display proper nav
  const isIn = user ? true : false;
  const userEmail = user?.email;
  const userName = user?.name;
  if(!userEmail || !userName) throw new Error("Email or Name null")

  const items = await getUserItems();

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navigation isHome={false} isLoggedIn={true} userEmail={userEmail} userName={userName}/>
      <PageHeader header="Your Closet" />
      
      <div className="flex flex-row flex-1 overflow-hidden mx-5">
          {/* Sidebar on the left */}
          <ProfileSidebar image="/images/Naruto.jpg" alt="Profile Picture" username={userName} stylesCount={items.items.length}/>

          {/* Gallery on the right */}
          <div className="flex-1 overflow-y-auto">
            <Gallery isProfilePage={true} items={items}/>
          </div>

        </div>

       {/* Bottom margin */}
       <div className="bg-background h-6"></div>

    </div>
  );
}