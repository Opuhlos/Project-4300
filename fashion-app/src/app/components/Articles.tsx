import Image from "next/image";
import Link from "next/link";

export interface Article {
    type: string; // Current supported types can be found in public/images/articles
    name: string;
    url: string;
    size: string;
}

function Article({type, url, name, size}: Article) {
    return(
        <div className="flex gap-5 pt-4">
            <Image className="h-fit w-fit rounded-full" src={'/images/articles/' + type + '.jpg'} width={60} height={60} alt="Thumbnail of clothing type"/>
            <div className="rows-2 gap-y-1">
                <Link target={"_blank"} className="hover:text-orange font-bold text-lg underline" href={url} >{name}</Link>
                <p>Size {size}</p>
            </div>
        </div>
    );
}

interface ArticlesProp {
    articles: Article[];
}

export default function Articles({articles}:ArticlesProp) {
    return(
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto mb-6">
            {/* very scuffed key method */}
            {articles.map((article) => <Article key={article.name + article.type + article.url} name={article.name} type={article.type} url={article.url} size={article.size} />)}
        </div>
    );
}