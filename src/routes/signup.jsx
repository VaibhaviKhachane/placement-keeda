import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { roleState } from "../atoms/roleState"
import { useRecoilValue } from "recoil"

export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [webLink, setWebLink] = useState([]);
    const [address, setAddress] = useState("");
    const [contactNo, setContactNo] = useState("");
    const role = useRecoilValue(roleState);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const baseUrl = "http://localhost:8080"
        let token = await fetch(`${baseUrl}/api/${role}`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "password": passwd,
                    "address": address,
                    "webLink": webLink,
                    "contactNo": contactNo
                })
            });
        if (token.status !== 400) {
            navigate(`/${role}`);
        }
        else {
            setEmail("");
            setPasswd("");
            setName("");
            setWebLink([]);
            setAddress("");
            setContactNo("");
            toast.error(`${role} already exists`);
        }
    }

    return (
        <div className="bg-gray-200 w-full min-h-screen p-10">
            <div className="leaf shadow-2xl">
                <Link to="/">
                    <h1 role="link" className="leaf text-2xl font-semibold p-2">Placement Keeda</h1>
                </Link>
            </div>
            <form action="post" className="mt-10 grid mx-10">
                <div className="grid grid-cols-2">
                    <div className="space-y-2">
                        <h1 className="p-1 font-semibold">Name</h1>
                        <input type="text" placeholder="Name"
                            className="p-2 rounded text-gray-800 text-lg font-semibold"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <h1 className="p-1 font-semibold">Email</h1>
                        <input type="email" placeholder="Email"
                            className="p-2 rounded text-gray-800 text-lg font-semibold"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <h1 className="p-1 font-semibold">Password</h1>
                        <input type="password" placeholder="Password"
                            className="p-2 rounded text-gray-800 text-lg font-semibold"
                            value={passwd}
                            onChange={e => setPasswd(e.target.value)}
                        />
                        <h1 className="p-1 font-semibold">WebLink</h1>
                        <input type="url" placeholder="WebLink"
                            className="p-2 rounded text-gray-800 text-lg font-semibold"
                            value={webLink}
                            onChange={e => setWebLink([e.target.value])}
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10"
                            placeholder="Address"
                            className="p-1 mt-10 font-semibold"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        ></textarea>
                        <h1 className="p-1 font-semibold">Contact No</h1>
                        <input type="text" placeholder="Contact No"
                            className="p-2 rounded text-gray-800 text-lg font-semibold"
                            value={contactNo}
                            onChange={e => setContactNo(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    className="p-5 bg-blue-500 rounded mt-5 font-semibold"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Sign Up
                </button>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </form>
            <Link to="/login">
                <h1 className="w-full grid place-items-center mt-10 font-semibold hover:text-gray-800" role="link">Already have an Account?</h1>
            </Link>
        </div>
    );
}