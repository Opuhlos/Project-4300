import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { IItemData } from "@/models/itemSchema";
import Button from "../Button";
import CreateForm from "./CreateForm";
import { useRouter } from "next/navigation";
import PopUpContainer from "../PopUpContainer";
import { Session } from "next-auth";

interface CreateStyleButtonProps {
    userEmail: string;
    userName: string;
}

export default function CreateStyleButton({ userEmail, userName } : CreateStyleButtonProps) {
    const [isFormOpen, setFormOpen] = useState(false);

    const handleCreateAStyleClick = () => {
        setFormOpen(isFormOpen => !isFormOpen)
    }

    const areaRef = useRef<HTMLDivElement>(null);

    // Closes the account drop down if clicked outside
    useEffect(() => {
        // Handler to close the drop down if clicked outside
        const handler = (event: MouseEvent) => {
            if(areaRef.current && !areaRef.current.contains(event.target as Node)){
                setFormOpen(false);
            }
        }

        document.addEventListener("mousedown", handler)
    });
    
    const router = useRouter();
    // Handler for posting items
    const OnSubmit = async (newItem:IItemData) => {
        console.log(newItem.articles)
        try {
            const response = await fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            router.refresh();
        } catch (error) {
            console.log(newItem)
            console.error('Error in CreateItem!', error);
        }
    };
    
    return(
        <div>
            <Button label={"Create a Style"} styles={"text-xl px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={handleCreateAStyleClick} />

            {isFormOpen && 
            <PopUpContainer 
                children={<div className="" ref={areaRef}> <CreateForm onSaveItemData={OnSubmit} userEmail={userEmail} userName={userName} /> </div>} 
            />}    
        </div>
    );
}