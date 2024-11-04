"use client"

import Image from "next/image";
import Button from "./Button";
import { grotesk } from './Fonts';
import PlusIconSVG from "./svg/PlusIconSVG";
import IconButton from "./IconButton";
// import User from "./User" or something similar

const tempTagArray = [
    { tag: 'Fall' }, 
    { tag: 'Casual' },
    { tag: 'Athleisure' }
];

const handleAddTag = () => {
    
};

interface TagProps {
    tag: string;
}

function Tag({tag}: TagProps) {
    return(
        <>
            <button className="bg-taggrey p-3 outline rounded-3xl mr-3 pt-1.5 pb-1.5 text-white text-sm hover:bg-darkerOrange hover:outline-orange">{tag}</button>
        </>
    );
}

function AddingTag() {
    return(
        <>
            <IconButton label='Tag' styles='flex p-2 gap-1 outline outline-taggrey rounded-3xl mr-3 pt-1.5 pb-1.5 text-sm' styles2='text-taggrey font-semibold' icon={<PlusIconSVG />} handleClick={handleAddTag}/>
        </>
    );
}


export default function Tags() {

    const isOwner = true;
    const adding = true;

    return(
        <div className="flex">
            {tempTagArray.map((item) => <Tag key={item.tag} tag={item.tag} />)}
            {adding ? <AddingTag /> : <></>}
        </div>
    );
}