export default function DropDown() {
    return(
        <div className={"absolute top-[120px] right-40 flex flex-col bg-dark w-40"}>
            <ul className={"flex flex-col gap-4 text-white"}>
                <li>View Profile</li>
                <li>Logout</li>
            </ul>
        </div>
    );
}