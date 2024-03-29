import { Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import { useRecoilValue, useRecoilState} from "recoil"
import { roleState } from "../atoms/roleState"
import toast, { Toaster } from 'react-hot-toast';
import { userState } from "../atoms/user"
import { tokenState } from "../atoms/tokenState"
import axios from "axios";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const role = useRecoilValue(roleState);
    const [, setToken] = useRecoilState(tokenState);
    const navigate = useNavigate();
    const [, setUser] = useRecoilState(userState)
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`/api/log${role}`,{
            email: email,
            password: passwd
        }).then((resp)=> {
            if(resp.data){
                setUser({
                    email: email,
                    password: passwd
                });
                setToken(resp.data);
            }
            return resp;
        }).then((resp)=> {
            currUser(resp.data)
            return resp;
        })
        .catch((resp)=> {if(resp.status !== 200) toast.error(`Invalid email or password for ${role}`) });
        // localStorage.setItem(`${role}`, JSON.stringify(getCurrentUser));
         
    }
    const currUser=async(token)=>{
        await axios.get(`/api/log${role}/me`, {
            headers:{
                'x-auth-token': token
            }
        })
        .then((res)=>{
            if(res.status === 200){ 
                localStorage.setItem(`${role}`, JSON.stringify(res.data))
                navigate(`/${role}`);
            } return res;})
        .catch((res)=> {if(res) toast.error(`Access denied. No token provided for ${role}`)})
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
                    <form method="post" className="grid place-items-center ">
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
                                onChange={(e) => setPasswd(e.target.value)}
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
