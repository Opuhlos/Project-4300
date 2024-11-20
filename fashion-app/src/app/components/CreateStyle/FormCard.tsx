
import Image from "next/image";
import Button from "../Button";
import { grotesk } from "../Fonts";
import { IItemData } from "@/models/itemSchema";
import ArticleInputs from "../Article Stuffs/ArticleInputs";

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
            articles: []
        }; 
        onSaveItemData(itemData)
        // Clear the form inputs after capturing the data entered
        setTitle('');
        setLink('');
        setDescription('');
    };

    return(
        <div className="flex flex-col gap-y-3">

            <form onSubmit={submitHandler} className={`${grotesk.className} flex flex-row rounded-md shadow-md overflow-hidden bg-white`}>                
                {/* Input for outfit name, image link, and description */}
                <div className="p-4 flex flex-col gap-y-3">

                    <h2 className="font-bold md:text-lg lg:text-xl pt-6">Outfit Name</h2>
                    <input className="p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                        id="outfitName"
                        type="text"
                        placeholder="Name your outfit"
                        value={enteredTitle}
                        onChange={handleTitleChange}
                        required
                    />

                    <h2 className="font-bold md:text-lg lg:text-xl">Image Link</h2>
                    <input className="p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                        id="outfitImage"
                        type="text"
                        placeholder="Enter an image link"
                        value={enteredLink}
                        onChange={handleLinkChange}
                        required
                    />

                    <div className="flex flex-col gap-2 lg:pb-6">
                        <h2 className="font-bold md:text-lg lg:text-xl">Description</h2>
                        <textarea className="h-40 p-2 pl-4 border-2 resize-none border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="description"
                            placeholder="Write about your item"
                            value={enteredDescription}
                            onChange={handleDescriptionChange}
                            required
                        />
                    </div>

                </div>

                {/* ARTICLES */}
                <div className="p-4 flex flex-row gap-x-3">

                    <div className="flex flex-col gap-y-3">
                        <h2 className="font-bold md:text-lg lg:text-xl pt-6">Article Type</h2>
                        <ArticleInputs/>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <h2 className="font-bold md:text-lg lg:text-xl pt-6">Name</h2>
                        <input className="p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                        id="articleName"
                        type="text"
                        placeholder="Name the article"
                        // value={enteredLink}
                        // onChange={handleLinkChange}
                        required
                    />
                    </div>
                
                </div>

            </form>

            <Button label={"Create"} styles={"m-auto bg-orange text-xl w-2/4 px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={submitHandler} />
        </div>

    );
}