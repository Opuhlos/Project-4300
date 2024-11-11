import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import ProfileSidebar from "../components/ProfileSidebar"; 

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navigation isHome={false} isLoggedIn={true} />
      <PageHeader header="Your Closet" />

      <div style={{ display: "flex", padding: "20px", flexGrow: 1 }}>
        {/* Profile Sidebar */}
        <ProfileSidebar 
          image="/images/Naruto.jpg" 
          alt="Profile Picture" 
          username="Username" 
          stylesCount={109} 
        />

        {/* Main Content Section */}
        <main style={{ flexGrow: 1, padding: "10px" }}>
          <Gallery />
        </main>
      </div>
    </div>
  );
}
