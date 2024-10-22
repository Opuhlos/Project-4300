import { Space_Grotesk } from '@next/font/google';

const grotesk = Space_Grotesk({
    weight: ['400', '700'],
    subsets: ['latin']
});

interface NavigationLinkProps {
    label: string;
}

export default function NavigationLink({label}:NavigationLinkProps) {
    return(
        <a className={`${grotesk.className}`}>{label}</a>
    );
}