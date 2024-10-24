import { grotesk } from './Fonts';

export default function NavigationButton() {
    return(
        <button className={`${grotesk.className} border rounded-[14px] px-5 py-3 border-black`}>
            Become a Creator
        </button>
    );
}