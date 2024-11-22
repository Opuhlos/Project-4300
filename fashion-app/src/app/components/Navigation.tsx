"use client";

import { useRouter } from 'next/navigation'

import StyleLink from './StyleLink';
import NavigationLink from './NavigationLink';
import Button from './Button';
import CreateStyleButton from './CreateStyle/CreateStyleButton';
import ProfileMenu from './ProfileMenu';

interface NavigationProps {
    isHome: boolean;
    isLoggedIn: boolean;
    userEmail: string;
    userName: string;
}

export default function Navigation( {isHome, isLoggedIn, userEmail, userName}:NavigationProps ) {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('/signup');
    };

    const handleStyleLinkClick = () => {
        router.push('/');
    };

    const mx = isHome ? "mx-24" : "mx-5";
    const mt = isHome ? "mt-10" : "mt-5";
    

    return(
        <div className={`bg-background ${mx} ${mt} flex justify-between items-center`}>
            
            <Button label={""} styles={"p-0 mx-0 border-none"} children={<StyleLink isHome={isHome}/>} handleClick={handleStyleLinkClick} />
            
            <div className="flex space-x-10 items-center">
                <NavigationLink styles={"text-xl"} label={"Styles"} dest="/styles"/>

                {isLoggedIn ? <CreateStyleButton userEmail={userEmail} userName={userName}/> : <NavigationLink styles={"text-xl"} label={"Log In"} dest="/login"/> }
        
                {isLoggedIn ? <ProfileMenu/>: <Button label={"Become a Creator"} styles={"text-xl px-[35px] py-[20px] hover:bg-dark hover:text-white"} children={""} handleClick={handleSignUpClick} />}
            </div>
            
        </div>
    );
}