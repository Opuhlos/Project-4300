import ProfileIcon from "./ProfileIcon";
import Button from "./Button";

import { useRouter } from 'next/navigation'


export default function AccountBar() {

    const router = useRouter();

    const handleProfileClick = () => {
        router.push('/profile')
    }

    return(
        <Button label={""} styles={"p-0 mx-0 border-none"} children={ <ProfileIcon image="/images/Naruto.jpg" alt="Profile Picture" height="70px" width="70px"/> } handleClick={handleProfileClick}/>
    );
}