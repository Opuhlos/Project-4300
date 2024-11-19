import { IItem } from '@/models/itemSchema';
import Articles from './Articles';
import { grotesk } from "./Fonts";

interface ItemFormProps {
    item: IItem;
    isViewOpen: boolean;
    setViewOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditForm( {item }:ItemFormProps,  ) {

    return(
            <div className="flex flex-row w-full">
                <img className="w-[359.3px] object-cover rounded-l-md" src={item.image} alt="Style Image"/> 

                <div className={`${grotesk.className} w-96 flex flex-col gap-3 rounded-r-md shadow-md overflow-hidden bg-white`}>                
                    <div className="p-4">

                        <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">{item.title}</h2>
                        <p className="font-normal text-md font-cardGrey" >{item.name}</p>
                        
                        <div className="flex flex-col gap-2 lg:pb-6">
                            <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">Description</h2>
                            <p className="w-11/12">{item.description} </p>
                        </div>

                        <Articles/>
                    </div>
                </div>
            </div>
    );
}