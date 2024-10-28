"use client";

import StyleLink from './StyleLink';
import NavigationLink from './NavigationLink';
import Button from './Button';

import { useRouter } from 'next/navigation'

export default function Navigation() {
    {/* Handler for link redirection*/}
    const router = useRouter();
    const handleSignUpClick = () => {
        router.push('/signup');
      };

    return(
        <div className="bg-background mx-10 mt-5 flex justify-between items-center">

            
            <StyleLink/>

            <div className="flex space-x-7 items-center">
                <NavigationLink label={"Styles"} dest="/styles"/>
                <NavigationLink label={"Log In"} dest="/login"/>
                <Button label={"Become a Creator"} handleClick={handleSignUpClick} styles={""}/>
            </div>
            
        </div>
    );
}