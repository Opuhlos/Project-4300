import GalleryCard from "./GalleryCard";

export default function Gallery() {
    // 
    return(
        // The 359.3px corresponds to the width of the Gallery Cards

        //gap-y-5 gap-x-2 mx-5 flex-1 overflow-y-auto grid grid-cols-[repeat(auto-fit,_359.3px)] justify-center
        //bg-slate-500 flex flex-wrap justify-between gap-x-3 gap-y-3`
        <div className={`gap-y-5 gap-x-2 flex-1 -auto grid grid-cols-[repeat(auto-fit,_359.3px)] `}>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
          
           
        </div>

    );
}