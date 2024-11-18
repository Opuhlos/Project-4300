import { IItem } from '@/models/itemSchema';
import Button from "./Button";
import { grotesk } from "./Fonts";
import { useRouter } from 'next/navigation';

import { useState, ChangeEvent, FormEvent } from 'react';

interface ItemFormProps {
    item: IItem;
    isViewOpen: boolean;
    setViewOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditForm( {item, setViewOpen, isViewOpen}:ItemFormProps,  ) {
    const [enteredTitle, setTitle] = useState<string>(item.title);
    const [enteredDescription, setDescription] = useState<string>(item.description);

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const router = useRouter();
    const submitHandler = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const updatedData = {
                title: enteredTitle,
                description: enteredDescription
            }
            const response = await fetch(`api/items/${item._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData)
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            setViewOpen(isViewOpen => !isViewOpen);
            router.refresh();
        } catch (error) {
            console.log('Error from EditForm');
        }
    };






    return(
        // 

            <div className="flex flex-row w-full">
                <img className="w-[359.3px] object-cover rounded-l-md" src={item.image} alt="Style Image"/> 

                <div className={`${grotesk.className}  flex flex-col gap-3 rounded-r-md shadow-md overflow-hidden bg-white`}>                
                    <div className="p-4">

                        <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">{item.title}</h2>

                        <div className="flex flex-col gap-2 lg:pb-6">
                            <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">Description</h2>

                            <textarea disabled className="w-11/12 h-40 p-2 pl-4 border-2 resize-none border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                                id="description"
                                value={enteredDescription}
                            />
                        </div>

                    </div>
                </div>
            </div>


    );
}