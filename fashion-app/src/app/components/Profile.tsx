import Image from "next/image";
import Button from "./Button";

interface ProfileProps {
    image: string;
    alt: string;
    height: string;
    width: string;
}

export default function Profile({image, alt, height, width}:ProfileProps) {
    return(
        <div className={`h-[${height}] w-[${width}] bg-black border border-hidden rounded-full overflow-hidden`}>
            <Image src={image} alt={alt} width={300} height={300}/>
        </div>

        // <div className={"h-[70px] w-[70px] bg-black border border-hidden rounded-full overflow-hidden"}>
        //     <Image src={"/images/Naruto.jpg"} alt="Profile Picture" width={300} height={300}/>
        // </div>
    );
}