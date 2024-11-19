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
        url: 'https://www2.hm.com/en_us/productpage.1251287002.html'
    },
    { 
        key: 'testData2',
        type: 'hat',
        name: 'Yankees hat',
        url: 'https://www2.hm.com/en_us/productpage.1251287002.html'
    }
]

interface ArticleProps {
    key: string; // Something uniquely identified from MongoDB preferably
    type: string; // Ex. "Baseball Hat", "Necklace"
    name: string;
    url: string;

}

function Article({type, url, name}: ArticleProps) {
    return(
        <div className="flex items-center gap-5 mt-4">
            <Image className="h-fit w-fit rounded-full"
                src={'/images/' + type + '.jpg'}
                width={60}
                height={60}
                alt="Picture of clothing type"
            />
            <div className="rows-2 gap-y-1">
                <Link className="hover:text-orange font-bold md:text-lg underline lg:text-xl" href={url} >{name}</Link>

            </div>
        </div>
    );
}

export default function Articles() {
    return(
        <div className="columns-1">
            {tempArticle.map((article) => <Article key={article.key} name={article.name} type={article.type} url={article.url} />)}
        </div>
    );
}