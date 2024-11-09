import Image from "next/image";
import Button from "./Button";
import { grotesk } from './Fonts';
import Tags from "./Tags";
import Items from "./Items"
// import User from "./User" or something similar

interface ProfileProps {
    image: string;
    alt: string;
    height: string;
    width: string;
}

export default function RegularCard() {
    return(
        // removed md:mt-20 from the topmost div's styles
        <div className="grid grid-cols-1 justify-items-center ">
            <div className="flex gap-3 rounded-md shadow-md overflow-hidden bg-white">
                <Image className="w-3/5 object-cover" src={"/images/PlaceHolderImage.png"} alt="Place Holder Image" width={362} height={506}/> 
                <div className={`${grotesk.className} p-4`}>
                    <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">Outfit Name</h2>
                    <div className="text-gray-500">
                        <p>By Creator</p>
                        <p>Short caption here! ajsfg jalsdkfj as; jfasldkfj a;slfj lksj;s j fjksl ;fjdsl; jfal skdfj;sa</p>
                        <hr className="m-0 mt-4 mb-4"/>
                    </div>
                    <div>
                        <Tags />
                    </div>
                    <div>
                        <Items />
                    </div>
                </div>    
            </div>
        </div>
    );
}