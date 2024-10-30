export default function DropDown() {
    return(
        <div className={"absolute border border-hidden rounded-[12px] top-[70px] right-[0px] flex flex-col bg-dark w-40"}>
            <ul className={"flex flex-col px-4 text-white my-3"}>
                <li>View Profile</li>
                <li>Logout</li>
            </ul>
        </div>
    );
}