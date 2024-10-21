import Image from 'next/image';
import { Space_Grotesk } from '@next/font/google';

const grotesk = Space_Grotesk({
    weight: ['400', '700'],
    subsets: ['latin']
});

export default function Navigation() {
    return(
        <div className="bg-background px-3">

            <div className="flex">
                <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" fill="black"/>
                </svg>

                <h1 className={`${grotesk.className} font-semibold text-2xl ml-2 mt-1`}>StyleLink</h1>
            </div>
            
            </div>
    );
}