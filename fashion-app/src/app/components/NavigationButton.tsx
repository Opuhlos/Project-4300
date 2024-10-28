import { grotesk } from './Fonts';

interface NavigationButtonProps {
    label: string;
}

export default function NavigationButton({label}:NavigationButtonProps) {
    return(
        <button className={`${grotesk.className} border rounded-[14px] px-5 py-3 border-black`}>
            {label}
        </button>
    );
}