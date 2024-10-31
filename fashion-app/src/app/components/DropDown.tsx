import Button from "./Button";
import NavigationLink from "./NavigationLink";
import LogOutSVG from "./svg/LogOutSVG";
import UserSVG from "./svg/UserSVG";

export default function DropDown() {
    const handleLogout = () => {
        alert("Logging out it not yet implemented. But the button works!")
    }
    
    return(
        <div className={"absolute border border-hidden rounded-[12px] top-[70px] right-[0px] flex flex-col bg-dark w-40"}>
            <ul className={"flex flex-col px-3 text-white my-3 gap-2"}>
                <li className={"flex items-center space-x-1"}>
                    <UserSVG/>
                    <NavigationLink styles={"text-base hover:underline"} label="View Profile" dest="/profile"/>
                </li>
                <li className={"flex items-center space-x-1"}>
                    <LogOutSVG/>
                    <Button label={"Logout"} styles={"p-0 mx-0 border-none text-base hover:underline flex items-center"} children={""} handleClick={handleLogout} />
                </li>
            </ul>
        </div>
    );
}