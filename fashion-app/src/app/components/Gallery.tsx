"use client";

import { useEffect, useRef, useState } from 'react';

import GalleryCard from "./GalleryCard";

interface GalleryProps {
    isProfilePage: boolean; 
}

export default function Gallery({ isProfilePage }: GalleryProps) {
    const galleryCardWidth = 359.3
    const galleryRef = useRef<HTMLDivElement>(null); 
    const [width, setWidth] = useState(0);
    const [gapSize, setGapSize] = useState<number>(0);

    // Responsible for dynamic gap sizing that is not achievable with tailwindd
    useEffect(() => {
        // Function to update the width when the component is mounted or resized
        const updateWidth = () => {
          if (galleryRef.current) {
            setWidth(galleryRef.current.offsetWidth);
            
          }
    }

    // update the width on mount
    updateWidth();

    // event listener to update width on window resize
    window.addEventListener('resize', updateWidth)

    if (width > 0) {
      // calculate the gap size
      // find out how many cards can currently fit in a single row
      let cardAmount = Math.floor(width / galleryCardWidth);
      // how many gaps there are
      let gapAmount = cardAmount - 1;
      // calculate the remaining width usable for gaps
      let remainingSpace = (width -  (cardAmount * galleryCardWidth)-8)
      // calculate gap size
      let gapSize = remainingSpace / gapAmount;
      // let newGapStyle = `gap-x-[${gapSize}px]`
      setGapSize(gapSize)
    }

    // clean up the event listener 
    return () => {
        window.removeEventListener('resize', updateWidth)
    }
    }, [width]); // This effect runs every time width is updated

    // For debugging purposes
    // useEffect(() => {
    //     if (gapSize) {
    //       // alert(gapSize); 
    //     }
    //   }, [gapSize]); // This will run when `gapStyle` is updated

    const gridStyle = {
        columnGap: `${gapSize}px`, // Dynamically set the gap
    };

    return(
        // IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT
        // The specific pr specification is necessary for the auto gap calculation to work! Moreover, that same number must be supplied
        // in the calculation
        <div ref={galleryRef} style={gridStyle} className={`gap-y-5 pr-[8px] flex-1 -auto grid grid-cols-[repeat(auto-fit,_359.3px)] `}>
            <GalleryCard isProfilePage={isProfilePage} />
            <GalleryCard isProfilePage={isProfilePage} />
            <GalleryCard isProfilePage={isProfilePage} />
            <GalleryCard isProfilePage={isProfilePage} />
            <GalleryCard isProfilePage={isProfilePage} />
            <GalleryCard isProfilePage={isProfilePage} />
            <GalleryCard isProfilePage={isProfilePage} />
            <GalleryCard isProfilePage={isProfilePage} />
            <GalleryCard isProfilePage={isProfilePage} />
        </div>

    );
}