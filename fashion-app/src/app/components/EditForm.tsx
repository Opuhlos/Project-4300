import { IItem } from '@/models/itemSchema';
import Button from "./Button";
import { grotesk } from "./Fonts";
import { useRouter } from 'next/navigation';

import { useState, ChangeEvent, FormEvent } from 'react';

interface ItemFormProps {
    item: IItem;
    isFormOpen: boolean;
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditForm( {item, setFormOpen, isFormOpen}:ItemFormProps,  ) {
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
            setFormOpen(isFormOpen => !isFormOpen);
            router.refresh();
        } catch (error) {
            console.log('Error from EditForm');
        }
    };






    return(
        <div className="flex flex-col gap-y-3 w-full">
            <form onSubmit={submitHandler} className={`${grotesk.className} flex gap-3 rounded-md shadow-md overflow-hidden bg-white`}>                
               <img className="w-3/5 object-cover" src={item.image} alt="Place Holder Image" width={362} height={506}/> 

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

            <Button label={"Update"} styles={"m-auto bg-orange text-xl w-1/4 px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={submitHandler} />
        </div>

    );
}