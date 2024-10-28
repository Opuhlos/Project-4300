"use client";

import StyleLink from './StyleLink';
import NavigationLink from './NavigationLink';
import Button from './Button';
import ProfileIcon from './ProfileIcon';

import { useRouter } from 'next/navigation'

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
        console.log("Creating a Style not yet implemented");
    }

    return(
        <div className="bg-background mx-[100px] mt-[40px] flex justify-between items-center">
            
            <Button label={""} styles={"p-0 mx-0 border-none"} children={<StyleLink/>} handleClick={handleStyleLinkClick} />
            
            <div className="flex space-x-[40px] items-center">
                <NavigationLink label={"Styles"} dest="/styles"/>

                {isLoggedIn ? <Button label={"Create a Style"} styles={"px-[35px] py-[20px]"} children={""} handleClick={handleCreateAStyleClick} /> : <NavigationLink label={"Log In"} dest="/login"/> }
        
                {isLoggedIn ? <ProfileIcon image="/images/Naruto.jpg" alt="Profile Picture" height="70px" width="70px"/> : <Button label={"Become a Creator"} styles={"px-[35px] py-[20px]"} children={""} handleClick={handleSignUpClick} />}
            </div>
            
        </div>
    );
}