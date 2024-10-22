import { Space_Grotesk } from '@next/font/google';

const grotesk = Space_Grotesk({
    weight: ['400', '700'],
    subsets: ['latin']
});

export default function NavigationButton() {
    return(
        <button className={`${grotesk.className} border rounded-[14px] px-5 py-3 border-black`}>
            Become a Creator
        </button>
    );
}