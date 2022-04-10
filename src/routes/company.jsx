import { Sidebar } from "../components/company/Sidebar";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { roleState } from "../atoms/roleState";
import { useRecoilValue } from "recoil";
import { Profile } from "./profile";
import { Drives } from "./drives";

export const Company = () => {
    const role = useRecoilValue(roleState);
    return (
        <div className="flex justify-between p-10 bg-gray-200 w-full h-screen overflow-hidden">
                <Sidebar />
        </div>
    );
}