import { IItem } from '@/models/itemSchema';
import Button from "./Button";
import { grotesk } from "./Fonts";
import { useRouter } from 'next/navigation';
import Articles from './Articles';
import { Article } from './Articles';

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

    const ARTICLES_ARRAY: Article[] = item.articles;
    const [aarticles, setArticles] = useState<Article[]>(ARTICLES_ARRAY);

    // Removes the article we want by only filtering for articles w/o the deleted article's key
    const removeArticle = (deleteArticleKey: String) => {
        const filtered:Article[] = aarticles.filter( (a:Article) => String(a.articleKey) !== String(deleteArticleKey) )
        setArticles(filtered);
    }

    const router = useRouter();
    const submitHandler = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const updatedData = {
                title: enteredTitle,
                description: enteredDescription,
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
        <div className="flex flex-col gap-y-3">
            <div className="flex flex-row h-[480px]">
                <img className="w-[359.3px]  object-cover rounded-l-md" src={item.image} alt="Place Holder Image"/> 
                <form onSubmit={submitHandler} className={`${grotesk.className} px-4 w-96 flex flex-col gap-3 rounded-r-md shadow-md bg-white`}>                
                 
                    <div className="flex flex-col gap-y-2">
                        <h2 className="font-bold md:text-lg lg:text-xl pt-6">Outfit Name</h2>

                        <input className="transition duration-300 hover:border-darkerOrange  p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="outfitName"
                            type="text"
                            placeholder="Name your outfit"
                            value={enteredTitle}
                            onChange={handleTitleChange}
                            required
                        />

                        <h2 className="font-bold md:text-lg lg:text-xl pt-6">Description</h2>
                        <textarea className="transition duration-300 hover:border-darkerOrange  max-h-24 p-1 border-2 resize-none border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                            id="description"
                            placeholder="Write about your item"
                            value={enteredDescription}
                            onChange={handleDescriptionChange}
                            required
                        />

                        <div className="flex flex-col gap-y-3 h-[220px] overflow-y-auto pt-3">
                            <Articles isDeletable={true} handleDelete={removeArticle} articles={aarticles}/>
                        </div>

                    </div>
                </form>
            </div>

            <Button label={"Update"} styles={"m-auto bg-orange text-xl w-50 px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={submitHandler} />
        </div>   

    );
}