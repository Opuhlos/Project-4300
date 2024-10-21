import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>

      <div className="mt-4">
        <Navigation/>
      </div>
      
      <p>Hello</p>

    </div>
  );
}
