import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { grotesk } from './Fonts';
// import User from "./User" or something similar

const tempArticle = [
    { 
        key: 'testData1',
        type: 'hat',
        name: 'Drippy hat',
        url: 'https://www2.hm.com/en_us/productpage.1251287002.html',
        size: 'M'
    },
    { 
        key: 'testData2',
        type: 'shirt',
        name: 'Plain shirt',
        url: 'https://www2.hm.com/en_us/productpage.1251287002.html',
        size: 'L'
    },
    { 
        key: 'testData3',
        type: 'jacket',
        name: 'Coat',
        url: 'https://www2.hm.com/en_us/productpage.1251287002.html',
        size: 'N/A'
    },
    { 
        key: 'testData4',
        type: 'pants',
        name: 'Ripped jeans',
        url: 'https://www2.hm.com/en_us/productpage.1251287002.html',
        size: 'L'
    },
    { 
        key: 'testData2',
        type: 'shoes',
        name: 'Air Jordans',
        url: 'https://www2.hm.com/en_us/productpage.1251287002.html',
        size: '12'
    }
]

export interface ArticleProps {
    key: string; // Something uniquely identified from MongoDB preferably
    type: string; // Ex. "Baseball Hat", "Necklace"
    name: string;
    url: string;
    size: string;
}

function Article({type, url, name, size}: ArticleProps) {
    return(
        <div className="flex gap-5 pt-4">
            <Image className="h-fit w-fit rounded-full" src={'/images/articles/' + type + '.jpg'} width={60} height={60} alt="Thumbnail of clothing type"/>
            <div className="rows-2 gap-y-1">
                <Link target={"_blank"} className="hover:text-orange font-bold md:text-lg underline lg:text-xl" href={url} >{name}</Link>
                <p>Size {size}</p>
            </div>
        </div>
    );
}

export default function Articles() {
    return(
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto mb-6">
            {tempArticle.map((article) => <Article key={article.key} name={article.name} type={article.type} url={article.url} size={article.size} />)}
        </div>
    );
}