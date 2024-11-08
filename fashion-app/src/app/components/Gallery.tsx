import GalleryCard from "./GalleryCard";
import styles from './Gallery.module.css'

export default function Gallery() {
    // 
    return(
        // flex flex-wrap gap-x-3 gap-y-3 mx-5 
        <div className={`gap-y-5 gap-x-2 mx-5 flex-1 ${styles.container}`}>
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