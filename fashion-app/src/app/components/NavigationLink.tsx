import { grotesk } from './Fonts';

interface NavigationLinkProps {
    label: string;
    dest: string;
}

export default function NavigationLink({label, dest}:NavigationLinkProps) {
    return(
        <a href={dest} className={`${grotesk.className} text-xl`}>{label}</a>
    );
}