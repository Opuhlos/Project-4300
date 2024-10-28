"use client";

import StyleLink from './StyleLink';
import NavigationLink from './NavigationLink';
import Button from './Button';

import { useRouter } from 'next/navigation'

export default function Navigation() {
    {/* Button handleClick*/}
    const router = useRouter();
    const handleSignUpClick = () => {
        router.push('/signup');
    };
    const handleStyleLinkClick = () => {
        router.push('/');
    };

    return(
        <div className="bg-background mx-10 mt-5 flex justify-between items-center">
            
            <Button label={""} styles={"p-0 mx-0 border-none"} children={<StyleLink/>} handleClick={handleStyleLinkClick} />
            
            <div className="flex space-x-7 items-center">
                <NavigationLink label={"Styles"} dest="/styles"/>
                <NavigationLink label={"Log In"} dest="/login"/>
                <Button label={"Become a Creator"} styles={"px-5 py-3"} children={""} handleClick={handleSignUpClick} />
            </div>
            
        </div>
    );
}