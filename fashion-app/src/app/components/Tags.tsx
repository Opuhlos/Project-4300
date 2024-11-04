import Image from "next/image";
import Button from "./Button";
import { grotesk } from './Fonts';
import plusIconSVG from "./svg/plusIconSVG";
// import User from "./User" or something similar

const tempTagArray = [
    { tag: 'Fall' },
    { tag: 'Neutral'}, 
    { tag: 'Casual' },
    { tag: 'Athleisure' }
];

interface TagProps {
    tag: string;
    adding: boolean;
}

function Tag({tag}: TagProps) {
    return(
        <>
            <button className="bg-taggrey p-3 outline rounded-3xl mr-3 pt-1.5 pb-1.5 text-white text-sm hover:bg-darkerorange hover:outline-lightorange">{tag}</button>
        </>
    );
}

function addingTag({tag}: TagProps) {
    return(
        <>
            <button className="bg-taggrey p-3 outline rounded-3xl mr-3 pt-1.5 pb-1.5 text-white text-sm">Tag</button>
        </>
    );
}


export default function Tags() {

    const isOwner = true;
    const adding = false;

    return(
        <div className="flex-col">
            {tempTagArray.map((item) => <Tag key={item.tag} tag={item.tag} />)}
            {adding ? <Tag />}
        </div>
    );
}