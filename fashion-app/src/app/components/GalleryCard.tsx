import Image from "next/image";
import Button from "./Button";
import { grotesk } from './Fonts';
import Tags from "./Tags";
import Items from "./Items"
import IconButton from "./IconButton";
// import User from "./User" or something similar

interface ProfileProps {
    image: string;
    alt: string;
    height: string;
    width: string;
}

// Same dummy data as Items.tsx
const tempItem = [
    { 
        key: 'testData1',
        imgType: 'hat',
        type: 'Hat',
        store: 'Amazon',
        urlToBuy: 'https://http.cat/status/100'
    },
    { 
        key: 'testData2',
        imgType: 'hat',
        type: 'Different Hat',
        store: 'Aritzia',
        urlToBuy: 'https://http.cat/status/102'
    }
]

// Same as used in Items.tsx, 
// could pass this info to Reg Card when clicked
interface ItemProps {
    key: string; // Something uniquely identified from MongoDB preferably
    imgType: string; // Ex. "Hat", "Jacket", "Jewelery"
    type: string; // Ex. "Baseball Hat", "Necklace"
    store: string; // Ex. "Amazon"
    urlToBuy: string;

}

function Clothes() {
    return(
        <div className="flex gap-1">
            {tempItem.map((item) => <Image 
                key={item.key} 
                className="rounded-full"
                src={'/images/' + item.imgType + '.jpg'}
                width={60}
                height={60}
                alt="Picture of clothing type"
            />)}
        </div>
    );
}

export default function RegularCard() {
    return(
        // Temp grid for testing
        <div className="grid grid-cols-1 justify-items-center mt-20">
            <div className="grid gap-3 rounded-md shadow-md h-fit overflow-hidden bg-white">
                <div className="max-h-96">
                    <img className="h-full w-full object-cover" src={"/images/PlaceHolderImage.png"} alt="Place Holder Image" /> 
                </div>
                <div className={`${grotesk.className} p-4 max-w-[362px]`}>
                    <div className="flex space-x-36 lg:space-x-32">
                        <h2 className="font-bold md:text-lg lg:text-xl">Outfit Name</h2>
                        <p className="text-gray-500">By Creator</p>
                    </div>
                    <hr className="m-0 mt-2 mb-2"/>
                    <Clothes />
                    <Tags />
                </div>    
            </div>
        </div>
    );
}