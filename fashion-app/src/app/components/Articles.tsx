import Image from "next/image";
import Link from "next/link";

export const article_type_dropdown_styles = {
    control: (base, state) => ({
      ...base,
      minWidth: '150px',
      borderRadius: '8px', 
      borderColor: state.isFocused ?'#FFBF5F':'#CBCED5',  
      boxShadow: 'none',    
      borderWidth: '2px',
      height: '44px',
      '&:hover': {
        borderColor: '#FFBF5F', // Change border color on hover
      }
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#FFA216' // Highlight color for selected option
        : state.isFocused
        ? '#FFBF5F' // Highlight color for hovered option
        : 'white', // Default background
        '&:active': {
         backgroundColor: '#FFA216', // Background color when the option is pressed
        },
      color: state.isSelected ? 'white' : 'black',
    }),
  };


export const article_types = [
    { value: 'hat', label: 'Hat' },
    { value: 'jacket', label: 'Jacket' },
    { value: 'shirt', label: 'Shirt' },
    { value: 'pants', label: 'Pants' },
    { value: 'shoes', label: 'Shoes' }
]

export interface Article {
    key: string;
    type: string;
    name: string;
    url: string;
    size: string;
}

export interface ArticleAble {
    isDeletable: boolean;
}

function Article({type, url, name, size}: Article, {isDeletable}:ArticleAble) {
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
            {articles.map((article) => <Article key={article.key} name={article.name} type={article.type} url={article.url} size={article.size} />)}
        </div>
    );
}