import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="header flex justify-between relative">
            <Link to="/">
                <h1 role="link" className="leaf font-semibold text-white text-2xl p-2">
                    Placement Keeda
                </h1>
            </Link>
            <div className="cone absolute right-5 -top-20" />
        </div>
    );
}