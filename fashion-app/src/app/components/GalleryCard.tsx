import Button from "./Button";
import { grotesk } from './Fonts';
import { useRouter } from "next/navigation";
import EditSVG from "./svg/EditSVG";
import DeleteSVG from "./svg/DeleteSVG";
import { IItem } from '@/models/itemSchema';
import PopUpContainer from "./PopUpContainer";
import { useState, useEffect, useRef } from "react";
import EditForm from "./ItemForms/EditForm";
import DetailedView from "./DetailedView";

interface RegularCardProps {
    item: IItem;
    isProfilePage: boolean; 
}

export default function RegularCard({ isProfilePage, item }: RegularCardProps) {
    // Opening form Logic
    const [isFormOpen, setFormOpen] = useState(false);
    const handleEditClick = () => {
        setFormOpen(isFormOpen => !isFormOpen)
    }
    useEffect(() => {
        // Handler to close the drop down if clicked outside
        const handler = (event: MouseEvent) => {
            if(areaRef.current && !areaRef.current.contains(event.target as Node)){
                setFormOpen(false);
            }
        } 
        document.addEventListener("mousedown", handler)
    });

    // revealing the card
    const [isDetailedViewOpen, setDetailedViewOpen] = useState(false);
    const handleViewClick = () => {
        setDetailedViewOpen(isDetailedViewOpen => !isDetailedViewOpen)
    }
    useEffect(() => {
        // Handler to close the drop down if clicked outside
        const handler = (event: MouseEvent) => {
            if(areaRef.current && !areaRef.current.contains(event.target as Node)){
                setDetailedViewOpen(false);
            }
        } 
        document.addEventListener("mousedown", handler)
    });

    // SImply need to pass a dummy handle delete function to Detailed View which contains the article component
    const dummy = (dummy: String) => {}

    const areaRef = useRef<HTMLDivElement>(null);
    
    // Delete logic
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

    // either returns the description or if its too long, shorten it and concat ... for gallery display
    const truncateText = (text:string) => {
        const limit = 35;
        const words = text.slice(0,limit);
        return text.length > words.length ? words + '. . .' : text;
      };

    return(

        // Temp grid for testing
        <div className="grid grid-cols-1 justify-items-center max-w-[359.3px]">

            <div className="grid gap-3 rounded-md shadow-md h-fit overflow-hidden bg-white">
                <div className="max-h-96">
                    <button onClick={handleViewClick}>
                        <img className="h-[384px] w-[359.3px] object-cover" src={item.image} alt="Place Holder Image" /> 
                    </button>
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
                            <p className="text-gray-500">By {item.name}</p>
                        )}
                    </div>

                    <hr className="border-cardGrey m-0 mt-2 mb-2"/>

                    {/* Description */}
                    <p className={"text-left"}>{truncateText(item.description)}</p>

                </div>    
            </div>
            

            {isFormOpen && 
            <PopUpContainer 
                children={<div className="" ref={areaRef}> <EditForm item={item} isFormOpen={isFormOpen} setFormOpen={setFormOpen}/> </div>} 
            />}    

            {isDetailedViewOpen && 
            <PopUpContainer 
                children={<div className="" ref={areaRef}> <DetailedView dummy={dummy} item={item}/> </div>} 
            />}  
        </div>
        
    );
}