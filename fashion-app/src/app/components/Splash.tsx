"use client";

import { useRouter } from 'next/navigation'
import Image from 'next/image';

import { grotesk } from "./Fonts";
import Button from "./Button";

export default function SplashInfo() {
    const router = useRouter();

    const handleFindYourStyleClick = () => {
        router.push('/styles');
    };

    return(
        
        <div className={`${grotesk.className} mx-24  flex`}>

            <div className={"flex flex-col gap-y-9 w-5/12 mt-16"}>
                <p className={"text-6xl font-medium"}>
                    Inspire your 
                    <span className={"text-darkerOrange"}> style</span>, 
                    <span className={"text-darkerOrange"}> shop </span> 
                    the look
                </p>

                <p>Our selection of user curated pieces offers trendy outfits for your day-to-day with links to where to buy for your convenience. Fill out your profile to select your unique tags today!</p>

                <Button label={"Find your style"} styles={"text-xl px-3 py-5 bg-dark text-white hover:bg-darkerOrange w-56"} children={""} handleClick={handleFindYourStyleClick} />
            </div>

            <div className={"flex-1 place-items-center mt-10"}>
                <Image className={"object-cover"} src={"/images/splash.png"} alt={"An assortment of stylized illustrations of clothing items"} width={600} height={600}/>
            </div>

        </div>
    );
}