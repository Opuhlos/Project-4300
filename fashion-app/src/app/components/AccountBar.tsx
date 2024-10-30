import { useRouter } from 'next/navigation'

import ProfileIcon from "./ProfileIcon";
import AccountDropDown from "./AccountDropDown";
import Button from "./Button";

export default function AccountBar() {

    const router = useRouter();

    const handleProfileClick = () => {
        router.push('/profile')
    }

    // The creation of a prop that passes the profile image, etc. into AccountBar and into the ProfileIcon component is possible

    return(
        <div className={"flex items-center space-x-2"}>
            <Button label={""} styles={"p-0 mx-0 border-none"} children={ <ProfileIcon image="/images/Naruto.jpg" alt="Profile Picture" height="70px" width="70px"/> } handleClick={handleProfileClick}/>

            <AccountDropDown/> 
        </div>
    );
}