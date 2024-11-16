import Image from "next/image";
import Button from "./Button";
import { grotesk } from './Fonts';
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import EditSVG from "./svg/EditSVG";
import DeleteSVG from "./svg/DeleteSVG";
import { IItem } from '@/models/itemSchema';

interface ProfileProps {
    image: string;
    alt: string;
    height: string;
    width: string;
}


interface RegularCardProps {
    item: IItem;
    isProfilePage: boolean; 
}

const handleEditClick = () => {
    console.log("Edit button clicked");
};



export default function RegularCard({ isProfilePage, item }: RegularCardProps) {
    const router = useRouter();
    const handleDeleteClick = async () => {
        try {
            const response = await fetch(`api/items/${item._id}/profile`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network resposne was not ok');
            }
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };

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
                            <Button label="" styles="border-none rounded-full bg-darkerOrange hover:bg-dark" handleClick={handleEditClick}>
                                <EditSVG />
                            </Button>
                            <Button label="" styles="border-none rounded-full bg-deleteRed hover:bg-dark" handleClick={handleDeleteClick}>
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