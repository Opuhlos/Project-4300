import Image from "next/image";
import Button from "./Button";
import { grotesk } from './Fonts';
// import User from "./User" or something similar

const tempTagArray = [
    { tag: 'Fall' },
    { tag: 'Neutral'}, 
    { tag: 'Casual' },
    { tag: 'Athleisure' }
];

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

interface ItemProps {
    key: string; // Something uniquely identified from MongoDB preferably
    imgType: string; // Ex. "Hat", "Jacket", "Jewelery"
    type: string; // Ex. "Baseball Hat", "Necklace"
    store: string; // Ex. "Amazon"
    urlToBuy: string;

}

function Item({imgType, type, store, urlToBuy}: ItemProps) {
    return(
        <div className="flex gap-5 mt-4">
            <Image className="rounded-full"
                src={'/images/' + imgType + '.jpg'}
                width={60}
                height={60}
                alt="Picture of clothing type"
            />
            <div className="rows-2 gap-y-1">
                <h2 className="font-bold md:text-lg lg:text-xl lg:pt-6">{type} - [ {store} ]</h2>
                <p className="text-gray-500"><a >{urlToBuy}</a></p>

            </div>
        </div>
    );
}

export default function Items() {
    return(
        <div className="columns-1">
            {tempItem.map((item) => <Item key={item.key} imgType={item.imgType} type={item.type} store={item.store} urlToBuy={item.urlToBuy} />)}
        </div>
    );
}