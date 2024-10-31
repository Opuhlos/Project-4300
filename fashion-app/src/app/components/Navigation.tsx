"use client";

import { useRouter } from 'next/navigation'

import StyleLink from './StyleLink';
import NavigationLink from './NavigationLink';
import Button from './Button';
import AccountBar from './AccountBar';

export default function Navigation() {
    const router = useRouter();
    const isLoggedIn = true;
 
    const handleSignUpClick = () => {
        router.push('/signup');
    };

    const handleStyleLinkClick = () => {
        router.push('/');
    };

    const handleCreateAStyleClick = () => {
        alert("Creating a Style not yet implmented. But the button works!")
    }

    return(
        <div className="bg-background mx-[100px] mt-[40px] flex justify-between items-center">
            
            <Button label={""} styles={"p-0 mx-0 border-none"} children={<StyleLink/>} handleClick={handleStyleLinkClick} />
            
            <div className="flex space-x-[40px] items-center">
                <NavigationLink styles={"text-xl"} label={"Styles"} dest="/styles"/>

                {isLoggedIn ? <Button label={"Create a Style"} styles={"text-xl px-[35px] py-[20px]"} children={""} handleClick={handleCreateAStyleClick} /> : <NavigationLink styles={"text-xl"} label={"Log In"} dest="/login"/> }
        
                {isLoggedIn ? <AccountBar/>: <Button label={"Become a Creator"} styles={"text-xl px-[35px] py-[20px]"} children={""} handleClick={handleSignUpClick} />}
            </div>
            
        </div>
    );
}