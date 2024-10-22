import StyleLink from './StyleLink';
import NavigationLink from './NavigationLink';
import NavigationButton from './NavigationButton';

export default function Navigation() {
    return(
        <div className="bg-background mx-10 mt-5 flex justify-between items-center">

            <StyleLink/>

            <div className="flex space-x-7 items-center">
                <NavigationLink label={"About Us"}/>
                <NavigationLink label={"Creations"}/>
                <NavigationButton/>
            </div>
            
        </div>
    );
}