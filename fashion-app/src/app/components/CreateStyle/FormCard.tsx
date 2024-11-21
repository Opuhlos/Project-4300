
import Image from "next/image";
import Button from "../Button";
import { grotesk } from "../Fonts";
import { IItemData } from "@/models/itemSchema";
import { article_type_dropdown_styles } from "../Articles";
import { article_types } from "../Articles";
import Select from 'react-select';

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
    const [enteredArticleName, setArticleName] = useState<string>('');
    const [enteredArticleLink, setArticleLink] = useState<string>('');
    const [enteredSize, setSize] = useState<string>('');

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value);
    };

    const handleArticleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setArticleName(event.target.value);
    };

    const handleArticleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
        setArticleLink(event.target.value);
    };

    const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSize(event.target.value);
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
        setArticleName('');
        setArticleLink('');
    };

    return(
        <div className="flex flex-col gap-y-3">

            <form onSubmit={submitHandler} className={`${grotesk.className} flex flex-row rounded-md shadow-md overflow-hidden bg-white`}>                
                {/* Input for outfit name, image link, and description */}
                <div className="p-4 flex flex-col gap-y-3">

                    <h2 className="font-bold md:text-lg lg:text-xl pt-6">Outfit Name</h2>
                    <input className="transition duration-300 hover:border-darkerOrange  p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                        id="outfitName"
                        type="text"
                        placeholder="Name your outfit"
                        value={enteredTitle}
                        onChange={handleTitleChange}
                        required
                    />

                    <h2 className="font-bold md:text-lg lg:text-xl">Image Link</h2>
                    <input className="transition duration-300 hover:border-darkerOrange  p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                        id="outfitImage"
                        type="text"
                        placeholder="Enter an image link"
                        value={enteredLink}
                        onChange={handleLinkChange}
                        required
                    />

                    <div className="flex flex-col gap-2 lg:pb-6">
                        <h2 className="font-bold md:text-lg lg:text-xl">Description</h2>
                        <textarea className="transition duration-300 hover:border-darkerOrange  h-40 p-2 pl-4 border-2 resize-none border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="description"
                            placeholder="Write about your item"
                            value={enteredDescription}
                            onChange={handleDescriptionChange}
                            required
                        />
                    </div>

                </div>

                <div className="h-1/1 my-4 border-r-2 border-cardGray"></div>

                {/* ARTICLES */}
                <form className="p-4 flex flex-col gap-y-3">

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-y-3">
                            <h2 className="font-bold md:text-lg lg:text-xl pt-6">Article Type</h2>
                            <Select styles={article_type_dropdown_styles} options={article_types}/>
                        </div>

                        <div className="flex flex-col gap-y-3 max-w-16">
                            <h2 className="font-bold md:text-lg lg:text-xl pt-6">Size</h2>
                            <input className="transition duration-300 hover:border-darkerOrange p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="articleName"
                            type="text"
                            placeholder="Size"
                            value={enteredSize}
                            onChange={handleSizeChange}
                            required
                            />
                        </div>
                    </div>
                    

                    <div className="flex flex-col gap-y-3">
                        <h2 className="font-bold md:text-lg lg:text-xl">Name</h2>
                        <input className="transition duration-300 hover:border-darkerOrange  p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                        id="articleName"
                        type="text"
                        placeholder="Name the article"
                        value={enteredArticleName}
                        onChange={handleArticleNameChange}
                        required
                    />
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <h2 className="font-bold md:text-lg lg:text-xl">Article Link</h2>
                        <input className="transition duration-300 hover:border-darkerOrange  p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                        id="articleLink"
                        type="text"
                        placeholder="Enter the article link"
                        value={enteredArticleLink}
                        onChange={handleArticleLinkChange}
                        required
                    />
                    </div>

                    <div className="h-full flex place-items-end mb-6">
                        <Button label={"Add Article"} styles={"bg-orange text-xl w-full py-3 hover:bg-dark hover:text-white"} children={""} handleClick={submitHandler} />
                    </div>
                    
                </form>

                <div className="h-1/1 my-4 border-r-2 border-cardGray"></div>

                {/* Show the articles here */}
                <div className="p-4 flex flex-col gap-y-3">

                    <div className="flex flex-col gap-y-3">
                        <h2 className="font-bold md:text-lg lg:text-xl pt-6 w-52">Articles</h2>
          
                    </div>
                    
                </div>


                

            </form>

            <Button label={"Create"} styles={"m-auto bg-orange text-xl w-2/4 px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={submitHandler} />
        </div>

    );
}