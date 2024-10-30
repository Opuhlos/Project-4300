import Button from "./Button";
import ArrowDropDownSVG from "./svg/ArrowDropDownSVG";

interface AccountDropDownStateProps {
    isDropDownOpen: boolean;
    setDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccountDropDown({isDropDownOpen, setDropDownOpen}:AccountDropDownStateProps ) {
    const handleAccountDropDownClick = () => {
        setDropDownOpen(isDropDownOpen => !isDropDownOpen)
    }

    return (
        <Button label={""} styles={"p-0 mx-0 rounded-full border-none hover:bg-orange"} children={<ArrowDropDownSVG/>} handleClick={ handleAccountDropDownClick }/>
    );
}