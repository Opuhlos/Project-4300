import { grotesk } from './Fonts';

interface NavigationLinkProps {
    label: string;
    dest: string;
    styles: string;
}

export default function NavigationLink({label, dest, styles}:NavigationLinkProps) {
    return(
        <a href={dest} className={`${grotesk.className} ${styles}`}>{label}</a>
    );
}