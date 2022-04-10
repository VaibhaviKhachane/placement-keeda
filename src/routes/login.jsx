import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useRecoilValue } from "recoil"
import { roleState } from "../atoms/roleState"
import toast, { Toaster } from 'react-hot-toast';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const role = useRecoilValue(roleState);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const baseUrl = "http://localhost:8080"
        let token = await fetch(`${baseUrl}/api/log${role}`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "email": email, "password": passwd })
            });
        if (token.status !== 400) {
            navigate(`/${role}`);
        }
        else {
            setEmail("");
            setPasswd("");
            toast.error(`Invalid email or password for ${role}`);
        }
    }

    return (
        <div className="bg-gray-200 w-full min-h-screen grid place-items-center">
            <div className="bg-gray-900 w-96 h-[30rem] rounded text-white shadow-2xl shadow-gray-800  grid place-items-center relative">
                <div className="leaf absolute -top-8 shadow-2xl">
                    <Link to="/">
                        <h1 className="text-white text-2xl font-semibold" role="link"><span className="text-gray-800">Placement</span> Keeda</h1>
                    </Link>
                </div>
                <div>
                    <form action="post" className="grid place-items-center ">
                        <div>
                            <h1 className="p-1">Email</h1>
                            <input type="email" placeholder="Email"
                                className="p-2 rounded text-gray-800 text-lg font-semibold"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <h1 className="p-1">Password</h1>
                            <input type="password" placeholder="Password"
                                className="p-2 rounded text-gray-800 text-lg font-semibold"
                                value={passwd}
                                onChange={e => setPasswd(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="p-5 bg-blue-500 rounded mt-5 font-semibold" >
                            Login
                        </button>
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </form>
                    <div className="grid place-items-center translate-y-10 hover:text-white text-gray-200">
                        <Link to="/signup">
                            <h1 role="link">
                                Create an Account
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
