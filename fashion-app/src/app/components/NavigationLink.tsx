import { grotesk } from './Fonts';

interface NavigationLinkProps {
    label: string;
}

export default function NavigationLink({label}:NavigationLinkProps) {
    return(
        <a className={`${grotesk.className}`}>{label}</a>
    );
}