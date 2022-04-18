import { Sidebar } from "../components/company/Sidebar";
// import { roleState } from "../atoms/roleState";
import { useRecoilValue } from "recoil";
import { componentState } from "../atoms/componentState";

export const Company = () => {
    // const role = useRecoilValue(roleState);
    const component = useRecoilValue(componentState);
    return (
        <div className="flex justify-between p-10 bg-gray-200 w-full h-screen overflow-hidden">
            <Sidebar />
            <div className="overflow-y-scroll scrollbar-hide">
                {component}
            </div>
        </div>
    );
}