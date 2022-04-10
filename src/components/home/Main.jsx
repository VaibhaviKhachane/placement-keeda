import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { roleState } from "../../atoms/roleState"

export const Main = () => {
    const [role, setRole] = useRecoilState(roleState);
    return (
        <div className="px-2 relative">
            <h1 className="text-white text-5xl font-semibold select-none">Become a Developer</h1>
            <div className="circle3 absolute -left-24 -top-10" />
            <p className="w-[29rem] text-lg text-gray-200 font-semibold px-2 select-none">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis omnis, odit quia cupiditate alias temporibus odio doloribus atque! Fuga, nostrum.</p>
            <div className="mt-10 text-xl space-x-5 text-white">
                <Link
                    className="font-semibold p-5 bg-blue-500 rounded"
                    to="/login"
                >
                    Get Started
                </Link>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="text-gray-900 p-3 rounded text-lg font-semibold"
                >
                    <option value="stu" >Student</option>
                    <option value="cmpny">Company</option>
                    <option value="tpo" >TPO</option>
                </select>
            </div>
        </div>
    );
}