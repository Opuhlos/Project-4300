import Image from "next/image";
import Button from "../Button";
import { grotesk } from "../Fonts";
import Tags from "../Tags";
import Items from "../Items"

import UploadIcon from "../svg/UploadIconSVG";

// import User from "./User" or something similar

interface ProfileProps {
    image: string;
    alt: string;
    height: string;
    width: string;
}

export default function RegularCard() {
    return(
        <div className="grid grid-cols-1 justify-items-center ">
            <form className={`${grotesk.className} flex gap-3 rounded-md shadow-md overflow-hidden bg-white`}>
                
                <div className="bg-orange w-[362px] flex flex-col gap-y-1 items-center justify-center">
                    <UploadIcon/>
                    <h2 className="text-lg">Upload an image</h2>
                </div>

                {/* <Image className="w-3/5 object-cover" src={"/images/PlaceHolderImage.png"} alt="Place Holder Image" width={362} height={506}/>  */}
               
               <div className="p-4">
   
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">Outfit Name</h2>
                        <input className="w-11/12 p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="outfitName"
                            type="text"
                            placeholder="Name your outfit"
                            // value={}
                            // onChange={}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">Description</h2>
                        <input className="w-11/12 p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="description"
                            type="text"
                            placeholder="Enter a short caption"
                            // value={}
                            // onChange={}
                        />
                    </div>

                     <hr className="border-cardGrey m-0 mt-4 mb-4"/>

                    <div>
                        <Tags />
                    </div>
                    <div>
                        <Items />
                    </div>
  
                </div>
            
            
            </form>
        </div>
    );
}