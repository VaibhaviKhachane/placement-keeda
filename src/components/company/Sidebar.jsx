import { Logo } from "../Logo"
import { roleState } from "../../atoms/roleState"
import { useRecoilValue, useRecoilState } from "recoil";
import { Profile } from "../../routes/profile";
import { componentState } from "../../atoms/componentState"
import { Drives } from "../../routes/drives";


export const Sidebar = () => {
    const role = useRecoilValue(roleState);
    const [component, setComponent] = useRecoilState(componentState);

    return (
        <div className="-translate-x-10 -translate-y-10 w-96 min-h-screen bg-gray-900 text-white font-semibold p-10">
            <Logo />
            <div className="mt-24 ml-2 p-2 space-y-5">
                <div
                    className="flex space-x-2 items-center cursor-pointer"
                    onClick={() => setComponent(<Profile />)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <h1>Profile</h1>
                </div>
                <div
                    className="flex space-x-2 items-center cursor-pointer"
                    onClick={() => setComponent(<Drives />)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <h1>Drives</h1>
                </div>
            </div>
        </div>
    );
}