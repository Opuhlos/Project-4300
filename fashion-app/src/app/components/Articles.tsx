import Image from "next/image";
import Link from "next/link";
import DeleteSVG from "./svg/DeleteSVG";
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
    { value: 'jewlery', label: 'Jewlery'},
    { value: 'dress', label: 'Dress'},
    { value: 'jacket', label: 'Jacket' },
    { value: 'shirt', label: 'Shirt' },
    { value: 'pants', label: 'Pants' },
    { value: 'shorts', label: 'Shorts'},
    { value: 'skirt', label: 'Skirt'},
    { value: 'shoes', label: 'Shoes' },
    { value: 'boots', label: 'Boots'}
]

export interface Article extends ArticleFunctionalityProps {
    articleKey: string;
    type: string;
    name: string;
    url: string;
    size: string;
}

export interface ArticleFunctionalityProps {
    isDeletable: boolean;
    handleDelete: (enteredArticleKey: String) => void;
}

function Article({type, url, name, size, articleKey, isDeletable, handleDelete}: Article) {
    return(
        <div className="flex flex-row justify-between pt-4">
            <div className="flex gap-5">
                <Image className="h-fit w-fit rounded-full" src={'/images/articles/' + type + '.jpg'} width={60} height={60} alt="Thumbnail of clothing type"/>
                <div className="rows-2 gap-y-1">
                    <Link target={"_blank"} className="hover:text-orange font-bold text-lg underline" href={url} >{name}</Link>
                    <p>Size {size}</p>
                </div>
            </div>

            {isDeletable && <div className="flex flex-row items-center"> <div className="bg-white w-3"></div> <button className="border-none rounded-full bg-deleteRed hover:bg-dark h-[31px] w-[31px]" onClick={() => handleDelete(articleKey)}> <DeleteSVG /> </button> <div className="bg-white w-3"></div>  </div>}      

        </div>
    );
}

interface ArticlesProp extends ArticleFunctionalityProps {
    articles: Article[];
}

export default function Articles({articles, isDeletable, handleDelete}:ArticlesProp) {
    return(
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto mb-6">
            {/* very scuffed key method */}
            {articles.map((article) => <Article handleDelete={handleDelete} isDeletable={isDeletable} articleKey={String(article.name + article.url + article.size)} key={String(article.name + article.url + article.size)} name={article.name} type={article.type} url={article.url} size={article.size} />)}
        </div>
    );
}