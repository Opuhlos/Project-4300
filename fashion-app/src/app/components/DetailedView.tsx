import { IItem } from '@/models/itemSchema';
import Articles from './Articles';
import { grotesk } from "./Fonts";

interface ItemFormProps {
    item: IItem;
    isViewOpen: boolean;
    setViewOpen: React.Dispatch<React.SetStateAction<boolean>>;

    // temp
    handleDelete: (enteredArticleKey: String) => void;
}

// temp
const removeArticle = (deleteArticleKey: String) => {
    console.log("temp")
}

export default function EditForm( {item }:ItemFormProps,  ) {

    return(
            <div className="flex flex-row h-[480px]">
                <img className="w-[359.3px] object-cover rounded-l-md" src={item.image} alt="Style Image"/> 

                <div className={`${grotesk.className} px-4 w-96 flex flex-col gap-3 rounded-r-md shadow-md  bg-white`}>                
                    <div className="flex flex-col h-full">

                        <div>
                            <h2 className="font-bold md:text-lg lg:text-xl pt-6">{item.title}</h2>
                            <p className="font-normal text-md font-cardGrey" >{item.name}</p>
                            <br></br>
                            <h2 className="font-bold md:text-lg lg:text-">Description</h2>
                            <p className="mb-6 overflow-y-auto max-h-24">{item.description} </p>
                        </div>
                        
                        {/* remove article temporary, functionlaity not implemented yet */}
                        <Articles handleDelete={removeArticle} isDeletable={false} articles={item.articles}/>
                    
                    </div>
                </div>
            </div>
    );
}