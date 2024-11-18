
import Image from "next/image";
import Button from "../Button";
import { grotesk } from "../Fonts";
import { IItemData } from "@/models/itemSchema";
import UploadIcon from "../svg/UploadIconSVG";

import { useState, ChangeEvent, FormEvent } from 'react';

interface ItemFormProps {
    onSaveItemData: (enteredItemData: IItemData) => void;
    userEmail: string;
    userName: string;
}

export default function FormCard( {onSaveItemData, userEmail, userName}:ItemFormProps ) {
    const [enteredTitle, setTitle] = useState<string>('');
    const [enteredDescription, setDescription] = useState<string>('');
    const [enteredLink, setLink] = useState<string>('');

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value);
    };

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        
        const itemData = {
            title: enteredTitle,
            description: enteredDescription,
            image: enteredLink,
            name: userName,
            email: userEmail,
        }; 
        onSaveItemData(itemData)
        // Clear the form inputs after capturing the data entered
        setTitle('');
        setLink('');
        setDescription('');
    };

    return(
        <div className="flex flex-col gap-y-3 w-full">
            <form onSubmit={submitHandler} className={`${grotesk.className} flex gap-3 rounded-md shadow-md overflow-hidden bg-white`}>                

                <div className="p-4">

                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">Outfit Name</h2>

                        <input className="w-11/12 p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="outfitName"
                            type="text"
                            placeholder="Name your outfit"
                            value={enteredTitle}
                            onChange={handleTitleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">Image Link</h2>

                        <input className="w-11/12 p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="outfitImage"
                            type="text"
                            placeholder="Enter an image link"
                            value={enteredLink}
                            onChange={handleLinkChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2 lg:pb-6">
                        <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">Description</h2>

                        <textarea className="w-11/12 h-40 p-2 pl-4 border-2 resize-none border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="description"
                            placeholder="Write about your item"
                            value={enteredDescription}
                            onChange={handleDescriptionChange}
                            required
                        />
                    </div>

                </div>
            </form>

            <Button label={"Create"} styles={"m-auto bg-orange text-xl w-2/4 px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={submitHandler} />
        </div>

    );
}