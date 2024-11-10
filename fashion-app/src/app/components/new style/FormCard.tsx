import Image from "next/image";
import Button from "../Button";
import { grotesk } from "../Fonts";
import Tags from "../Tags";
import Items from "../Items"
import UploadIcon from "../svg/UploadIconSVG";

import { useState, ChangeEvent, FormEvent } from 'react';

interface StyleData {
    id: number;
    title: string;
    description: string;
    // image blob
}

interface StyleFormProps {
    onSaveStyleData: (enteredStyleData: StyleData) => void;
  }

export default function FormCard( {onSaveStyleData}:StyleFormProps ) {
    const [enteredTitle, setTitle] = useState<string>('');
    const [enteredDescription, setDescription] = useState<string>('');

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
    
        const styleData = {
            // id thing is temporary
            id: Math.floor(Math.random() *1000) ,
            title: enteredTitle,
            description: enteredDescription,
        };
    
        console.log(styleData);
    
        onSaveStyleData(styleData)
        // Clear the form inputs after capturing the data entered
        setTitle('');
        setDescription('');
    };

    return(
        <div className="flex flex-col gap-y-3 items-center">
            <form onSubmit={submitHandler} className={`${grotesk.className} flex gap-3 rounded-md shadow-md overflow-hidden bg-white`}>
                
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
                            value={enteredTitle}
                            onChange={handleTitleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">Description</h2>

                        <textarea className="w-11/12 h-40 p-2 pl-4 border-2 resize-none border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="description"
                            placeholder="Write about your style"
                            value={enteredDescription}
                            onChange={handleDescriptionChange}
                            required
                        />
                    </div>

                        <hr className="border-cardGrey m-0 mt-4 mb-4"/>

                    <div>
                        <Tags />
                    </div>
                    <div>
                        {/* <Items /> */}
                    </div>

                </div>
            </form>

            <Button label={"Create"} styles={"bg-orange text-xl w-1/4 px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={submitHandler} />
        </div>

    );
}