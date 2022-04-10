import { Link } from "react-router-dom"

export const SignUp = () => {
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
                        />

                        <h1 className="p-1 font-semibold">Email</h1>
                        <input type="email" placeholder="Email"
                            className="p-2 rounded text-gray-800 text-lg font-semibold"
                        />
                        <h1 className="p-1 font-semibold">Password</h1>
                        <input type="password" placeholder="Password"
                            className="p-2 rounded text-gray-800 text-lg font-semibold"
                        />
                        <h1 className="p-1 font-semibold">WebLink</h1>
                        <input type="url" placeholder="WebLink"
                            className="p-2 rounded text-gray-800 text-lg font-semibold"
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10"
                            placeholder="Address"
                            className="p-1 mt-10 font-semibold"
                        ></textarea>
                        <h1 className="p-1 font-semibold">Contact No</h1>
                        <input type="text" placeholder="Contact No"
                            className="p-2 rounded text-gray-800 text-lg font-semibold"
                        />
                    </div>
                </div>
                <button className="p-5 bg-blue-500 rounded mt-5 font-semibold" >Sign Up</button>
            </form>
            <Link to="/login">
                <h1 className="w-full grid place-items-center mt-10 font-semibold hover:text-gray-800" role="link">Already have an Account?</h1>
            </Link>
        </div>
    );
}