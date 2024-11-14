import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { IItemData } from "@/models/itemSchema";
import Button from "../Button";
import { ReactNode } from 'react';
import FormCard from "./FormCard";

interface PopUpContainerProps {
    children: ReactNode;
}

function PopUpContainer({children}:PopUpContainerProps) {
    return(
        <div className="z-10 fixed inset-0 bg-dark top-0 left-0 w-screen h-screen bg-opacity-80 flex items-center justify-center">
            {children}
        </div>
    );
}

export default function CreateStyleButton() {
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
    
    // Handler for posting items
    const OnSubmit = async (newItem:IItemData) => {
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
            console.log("post okay!")
            // router.push('/');
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
                children={<div className="" ref={areaRef}> <FormCard onSaveItemData={OnSubmit}/> </div>} 
            />}    
        </div>
    );
}