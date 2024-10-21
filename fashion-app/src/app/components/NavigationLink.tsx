import { Space_Grotesk } from '@next/font/google';

const grotesk = Space_Grotesk({
    weight: ['400', '700'],
    subsets: ['latin']
});

export default function NavigationLink({label}) {
    return(
        <a className={`${grotesk.className}`}>{label}</a>
    );
}