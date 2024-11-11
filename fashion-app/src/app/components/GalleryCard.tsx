import Image from "next/image";
import Button from "./Button";
import { grotesk } from './Fonts';
import IconButton from "./IconButton";
import EditSVG from "./svg/EditSVG";
import DeleteSVG from "./svg/DeleteSVG";
// import User from "./User" or something similar

interface ProfileProps {
    image: string;
    alt: string;
    height: string;
    width: string;
}

interface RegularCardProps {
    isProfilePage: boolean; 
}

export default function RegularCard({ isProfilePage }: RegularCardProps) {
    return(
        // Temp grid for testing
        <div className="grid grid-cols-1 justify-items-center">
            <div className="grid gap-3 rounded-md shadow-md h-fit overflow-hidden bg-white">
                <div className="max-h-96">
                    <img className="h-full w-full object-cover" src={"/images/PlaceHolderImage.png"} alt="Place Holder Image" /> 
                </div>
                <div className={`${grotesk.className} p-4 max-w-[362px]`}>
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold md:text-lg lg:text-xl">Outfit Name</h2>
                        {isProfilePage ? (
                            <div className="flex space-x-2 justify-end">
                            <button>
                                <EditSVG />
                            </button>
                            <button>
                                <DeleteSVG />
                            </button>
                        </div>
                        ) : (
                            <p className="text-gray-500">By Creator</p>
                        )}
                    </div>

                    <hr className="border-cardGrey m-0 mt-2 mb-2"/>

                    {/* Description */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>    
            </div>
        </div>
    );
}