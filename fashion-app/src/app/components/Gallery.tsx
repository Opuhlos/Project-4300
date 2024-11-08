import GalleryCard from "./GalleryCard";

export default function Gallery() {
    // 
    return(
        // The 359.3px corresponds to the width of the Gallery Cards
        <div className={`gap-y-5 gap-x-2 mx-5 flex-1 overflow-y-auto grid grid-cols-[repeat(auto-fit,_359.3px)] justify-center`}>
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