import { grotesk } from './Fonts';
import StyleLinkLogoSVG from './svg/StyleLinkLogoSVG';

interface StyleLinkProps {
    isHome: boolean;
}

export default function StyleLink( {isHome}:StyleLinkProps ){
    return(
        <div className="flex space-x-2">
            <StyleLinkLogoSVG/>

            {isHome ? <p className={`${grotesk.className} font-semibold text-4xl`}>StyleLink</p> : null}
            
        </div>
    );
}