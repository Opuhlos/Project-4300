import Image from "next/image";
import Button from "./Button";
import { grotesk } from './Fonts';
import IconButton from "./IconButton";
import { Item } from "../styles/page";
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
    item: Item;
    isProfilePage: boolean; 
}

const handleEditClick = () => {
    console.log("Edit button clicked");
};

const handleDeleteClick = () => {
    console.log("Delete button clicked");
};

export default function RegularCard({ isProfilePage, item }: RegularCardProps) {
    return(
        // Temp grid for testing
        <div className="grid grid-cols-1 justify-items-center max-w-[359.3px]">
            <div className="grid gap-3 rounded-md shadow-md h-fit overflow-hidden bg-white">
                <div className="max-h-96">
                    <img className="h-full w-full object-cover" src={item.image} alt="Place Holder Image" /> 
                </div>
                <div className={`${grotesk.className} p-4 max-w-[362px]`}>
                    <div className="flex justify-between">
                        <h2 className="font-bold md:text-lg lg:text-xl">{item.title}</h2>
                        
                        {isProfilePage ? (
                            <div className="flex space-x-2 justify-end">
                            <Button label="" styles="border-none" handleClick={handleEditClick}>
                                <EditSVG />
                            </Button>
                            <Button label="" styles="border-none" handleClick={handleDeleteClick}>
                                <DeleteSVG />
                            </Button>
                        </div>
                        ) : (
                            <p className="text-gray-500">By {item.creator}</p>
                        )}
                    </div>

                    <hr className="border-cardGrey m-0 mt-2 mb-2"/>

                    {/* Description */}
                    <p>{item.description}</p>

                </div>    
            </div>
        </div>
    );
}