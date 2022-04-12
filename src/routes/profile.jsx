import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil"
import { userState } from "../atoms/user"
import { tokenState } from "../atoms/tokenState"

export const Profile = () => {
    const token = useRecoilValue(tokenState);
    const [user, setUser] = useRecoilState(userState);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwd, setPasswd] = useState(user.password);
    const [webLink, setWebLink] = useState(user.webLink);
    const [address, setAddress] = useState(user.address);
    const [contactNo, setContactNo] = useState(user.contactNo);
    const [eye, setEye] = useState(false);
    const handleFetch = async () => {
        const baseUrl = "http://localhost:8080";
        const result = await fetch(`${baseUrl}/cmpny/${token}`);
        return result;
    }
    // let result = handleFetch();
    // result.password = user.password;
    // setUser(result);

    return (
        <div className="p-5 -translate-x-[10rem]" onLoad={() => {
            let result = handleFetch();
            result.password = user.password;
            setUser(result);
        }}>
            <form action="post" className="grid  space-y-10 mt-14 text-xl font-semibold">
                <div className="grid grid-cols-2 space-x-24">
                    <div className="space-y-10">
                        <div>
                            <p>Name</p>
                            <input type="text" value={name}
                                onChange={e => setName(e.target.value)}
                                className="p-2 rounded font-semibold"
                            />
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="email" value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="p-2 rounded font-semibold"
                            />
                        </div>
                        <div>
                            <p>Password</p>
                            {
                                (!eye) ?
                                    <div className="flex space-x-2 items-center">
                                        <input type="password" value={passwd}
                                            onChange={e => setPasswd(e.target.value)}
                                            className="p-2 rounded font-semibold"
                                        />
                                        <svg
                                            onClick={() => setEye(true)}
                                            xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="flex space-x-2 items-center">
                                        <input type="text" value={passwd}
                                            onChange={e => setPasswd(e.target.value)}
                                            className="p-2 rounded font-semibold"
                                        />
                                        <svg
                                            onClick={() => setEye(false)}
                                            xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                            }

                        </div>
                        <div>
                            <p>WebLink</p>
                            <input type="text" value={webLink}
                                onChange={e => setWebLink([e.target.value])}
                                className="p-2 rounded font-semibold"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Address</p>
                            <textarea cols="30" rows="10" value={address}
                                onChange={e => setAddress(e.target.value)}
                                className="p-2 rounded font-semibold"
                            ></textarea>
                        </div>
                        <div>
                            <p>Contact No</p>
                            <input type="text" value={contactNo}
                                onChange={e => setContactNo(e.target.value)}
                                className="p-2 rounded font-semibold"
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 p-5 text-white">Save</button>
            </form>
        </div>
    );
}