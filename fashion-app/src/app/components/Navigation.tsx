"use client";

import { useRouter } from 'next/navigation'

import StyleLink from './StyleLink';
import NavigationLink from './NavigationLink';
import Button from './Button';
import ProfileMenu from './ProfileMenu';

interface NavigationProps {
    isHome: boolean;
    isLoggedIn: boolean;
}

export default function Navigation( {isHome, isLoggedIn}:NavigationProps ) {
    const router = useRouter();
 
    const handleSignUpClick = () => {
        router.push('/signup');
    };

    const handleStyleLinkClick = () => {
        router.push('/');
    };

    const handleCreateAStyleClick = () => {
        alert("Creating a Style not yet implmented. But the button works!")
    }

    const mx = isHome ? "mx-24" : "mx-5";
    const mt = isHome ? "my-10" : "my-6";

    return(
        <div className={`bg-background ${mx} ${mt} flex justify-between items-center`}>
            
            <Button label={""} styles={"p-0 mx-0 border-none"} children={<StyleLink isHome={isHome}/>} handleClick={handleStyleLinkClick} />
            
            <div className="flex space-x-10 items-center">
                <NavigationLink styles={"text-xl"} label={"Styles"} dest="/styles"/>

                {isLoggedIn ? <Button label={"Create a Style"} styles={"text-xl px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={handleCreateAStyleClick} /> : <NavigationLink styles={"text-xl"} label={"Log In"} dest="/login"/> }
        
                {isLoggedIn ? <ProfileMenu/>: <Button label={"Become a Creator"} styles={"text-xl px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={handleSignUpClick} />}
            </div>
            
        </div>
    );
}