import { IItem } from '@/models/itemSchema';
import Button from "../Button";
import { grotesk } from "../Fonts";
import { useRouter } from 'next/navigation';
import Articles from '../Articles';
import { Article } from '../Articles';

import Select from 'react-select';
import { article_type_dropdown_styles } from '../Articles';
import { article_types } from '../Articles';

import { useState, ChangeEvent, FormEvent } from 'react';

interface ItemFormProps {
    item: IItem;
    isFormOpen: boolean;
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditForm( {item, setFormOpen, isFormOpen}:ItemFormProps,  ) {
    // useStates for the style
    const [enteredTitle, setTitle] = useState<string>(item.title);
    const [enteredDescription, setDescription] = useState<string>(item.description);

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    // useStates for the Article form
    const [enteredArticleName, setArticleName] = useState<string>('');
    const [enteredArticleLink, setArticleLink] = useState<string>('');
    const [enteredSize, setSize] = useState<string>('');
    const [selectedType, setType] = useState(null);

    const handleArticleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setArticleName(event.target.value);
    };

    const handleArticleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
        setArticleLink(event.target.value);
    };

    const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSize(event.target.value);
    };

    const handleTypeChange = (selectedOption) => {
        setType(selectedOption);
    };

    const ARTICLES_ARRAY: Article[] = item.articles;
    const [aarticles, setArticles] = useState<Article[]>(ARTICLES_ARRAY);

    const addArticle = (newArticle: Article) => {
        setArticles((prevArticles) => [...prevArticles, newArticle]);
        console.log(aarticles);
    };

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
                articles: aarticles,
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

    const articleHandler = (event: FormEvent) => {
        event.preventDefault();

        // ensures the selectType.value won't be null
        if (!enteredArticleLink.trim() || !selectedType || !enteredArticleName.trim() || !enteredSize.trim()) {
            alert("To add an article, all of the relevant input fields must be filled!");
            return;
        }

        const articleData = {
            key: String(enteredArticleName + enteredArticleLink + enteredSize),
            articleKey: String(enteredArticleName + enteredArticleLink + enteredSize),
            type: selectedType.value,
            name: enteredArticleName,
            url: enteredArticleLink,
            size: enteredSize,
        }

        addArticle(articleData);

        setType(null);
        setArticleName('');
        setArticleLink('');
        setSize('');
    }

    return(
        <div className="flex flex-row gap-x-3">    
            {/* Left Side    Displays the outfit with its corresponding details */}
            <div className="flex flex-col gap-y-3">
                <div className="flex flex-row h-[480px]">
                    <img className="w-[359.3px]  object-cover rounded-l-md" src={item.image} alt="Place Holder Image"/> 
                    <form onSubmit={submitHandler} className={`${grotesk.className} px-4 w-96 flex flex-col gap-3 rounded-r-md shadow-md bg-white`}>                
                    
                        <div className="flex flex-col gap-y-3">
                            <h2 className="font-bold md:text-lg lg:text-xl pt-6">Outfit Name</h2>

                            <input className="transition duration-300 hover:border-darkerOrange  p-2 pl-4 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                                id="outfitName"
                                type="text"
                                placeholder="Name your outfit"
                                value={enteredTitle}
                                onChange={handleTitleChange}
                                required
                            />

                            <h2 className="font-bold md:text-lg lg:text-xl">Description</h2>
                            <textarea className="transition duration-300 hover:border-darkerOrange  max-h-24 p-1 border-2 resize-none border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
                                id="description"
                                placeholder="Write about your item"
                                value={enteredDescription}
                                onChange={handleDescriptionChange}
                                required
                            />

                            <div className="flex flex-col gap-y-3 h-[240px] overflow-y-auto pt-3">
                                <Articles isDeletable={true} handleDelete={removeArticle} articles={aarticles}/>
                            </div>

                        </div>
                    </form>
                </div>

                <Button label={"Update"} styles={"m-auto bg-orange text-xl w-50 px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={submitHandler} />
            </div>   
       
            {/* ARTICLES CREATION FORM */}
            <form className="flex flex-col gap-y-3">

                <div className="bg-white h-[480px] rounded-md p-4 flex flex-col gap-y-3">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-y-3">
                            <h2 className="font-bold md:text-lg lg:text-xl pt-6">Article Type</h2>
                            <Select required styles={article_type_dropdown_styles} value={selectedType} options={article_types} onChange={handleTypeChange}/>
                        </div>

                        <div className="flex flex-col gap-y-3 max-w-12">
                            <h2 className="font-bold md:text-lg lg:text-xl pt-6">Size</h2>
                            <input className="transition duration-300 hover:border-darkerOrange p-2 border-2 border-cardGrey rounded-lg text-base focus:outline-none focus:border-darkerOrange"
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
                </div>

                <Button label={"Add Article"} styles={"m-auto bg-orange text-xl w-50 px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={articleHandler} />
 

                </form>
       
        </div>

    );
}